import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadStripe } from '@stripe/stripe-js';
import { setCleaningAction } from '../../store/actions/cleaningActions';
import { defaultState } from '../../store/reducers/cleaningReducer';
import { formatDate, getDateFromDateObject, createDateObject, defineIsCleaningSoon } from '../../utils/formatDate';
import { createOrder, getSubscriptions } from '../../http/orderAPI';
import { createCheckoutSession } from '../../http/paymentAPI';
import { roundPrice } from '../../utils/calculatePrice';
import { bathrooms, bedrooms, kitchens, livingRooms } from '../../constants/selectOptions';
import edit from '../../images/edit.png';
import ScheduleWindow from '../ScheduleWindow/ScheduleWindow';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Summary.scss';

const Summary = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const pricing = useSelector((state) => state.services.pricing);
  const cleaningState = useSelector((state) => state.cleaning);

  const [policyAccepting, setPolicyAccepting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [cleaning, setCleaning] = useState(cleaningState);
  const [loading, setLoading] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const { t } = useTranslation();

  const { pathname } = useLocation();
  const isConfirmation = pathname === '/confirmation';

  useEffect(() => {
    if (!cleaningState.address1 && sessionStorage.getItem('cleaning')) {
      const cleaning = JSON.parse(sessionStorage.getItem('cleaning'));
      dispatch(setCleaningAction(cleaning));
      setCleaning(cleaning);
    }
  }, []);

  useEffect(() => {
    const getLastSubscription = async () => {
      const subscriptions = await getSubscriptions(user.id);
      const lastSubscription = subscriptions[subscriptions.length - 1];
      const order = lastSubscription.orders[0];
      const formattedOrder = {
        selectedCleaning: order.serviceType,
        selectedServices: order.extraServices,
        repeat: lastSubscription.subscriptionType,
        selectedSpeed: order.howFast,
        defaultAddressId: order.address._id,
        apartmentSize: order.address.size,
        livingRoomsNum: livingRooms.find((elem) => Number(elem.split(' ')[0]) === order.address.livingRooms),
        bedroomsNum: bedrooms.find((elem) => Number(elem.split(' ')[0]) === order.address.bedrooms),
        bathroomsNum: bathrooms.find((elem) => Number(elem.split(' ')[0]) === order.address.bathrooms),
        kitchensNum: kitchens.find((elem) => Number(elem.split(' ')[0]) === order.address.kitchens),
        address1: order.address.address,
        address2: order.address.secondAddress,
        postalCode: order.address.postalCode,
        city: order.address.city,
        province: order.address.province,
        instructions: order.specialInstructions,
        cleaningSum: order.orderPriceId.cleaningSum,
        speedSum: order.orderPriceId.speedSum,
        ivaPercent: order.orderPriceId.taxPercent,
        paymentStatus: order.paymentStatus
      };

      if (lastSubscription.subscriptionType === 'One-time') {
        formattedOrder.date = getDateFromDateObject(order.date);
        formattedOrder.time = order.time;
        formattedOrder.tariff = order.orderPriceId.tariffNumber;
        formattedOrder.timeCoeff = order.orderPriceId.timeCoeff;
        formattedOrder.timeSum = order.orderPriceId.timeSum;
        formattedOrder.subtotal = order.orderPriceId.subtotalSum;
        formattedOrder.iva = order.orderPriceId.tax;
        formattedOrder.total = order.orderPriceId.totalSum;
      } else if (lastSubscription.subscriptionType === 'Custom schedule') {
        formattedOrder.customSchedule = lastSubscription.orders.map((elem) => ({
          date: getDateFromDateObject(elem.date),
          time: elem.time,
          timeSum: elem.orderPriceId.timeSum,
          subtotal: elem.orderPriceId.subtotalSum,
          iva: elem.orderPriceId.tax,
          total: elem.orderPriceId.totalSum,
          tariff: elem.orderPriceId.tariffNumber,
          timeCoeff: elem.orderPriceId.timeCoeff,
        }));
      } else {
        formattedOrder.dates = lastSubscription.orders.map((elem) => getDateFromDateObject(elem.date));
        formattedOrder.time = order.time;
        formattedOrder.startDate = getDateFromDateObject(lastSubscription.startDate);
        formattedOrder.lastDate = getDateFromDateObject(lastSubscription.lastDate);
        formattedOrder.duration = lastSubscription.duration;
        formattedOrder.excludedDates = lastSubscription.excludedDates.map((elem) => ({
          date: getDateFromDateObject(elem),
        }));
        formattedOrder.subscriptionPrices = lastSubscription.orders.map((elem) => ({
          timeSum: elem.orderPriceId.timeSum,
          subtotal: elem.orderPriceId.subtotalSum,
          iva: elem.orderPriceId.tax,
          total: elem.orderPriceId.totalSum,
          tariff: elem.orderPriceId.tariffNumber,
          timeCoeff: elem.orderPriceId.timeCoeff,
        }));
      }

      setCleaning(formattedOrder);
    };

    if (isConfirmation && user.id) {
      getLastSubscription();
    }
  }, [user, pathname]);

  const navigate = useNavigate();

  const formOrder = async () => {
    const orderObject = {
      userId: user.id,
      subscriptionType: cleaning.repeat,
      address: {},
    };

    const dateArr =
      cleaning.repeat === 'One-time'
        ? [cleaning.date]
        : cleaning.repeat === 'Custom schedule'
        ? cleaning.customSchedule
        : cleaning.dates;

    orderObject.orders = dateArr.map((elem, index) => {
      const dateString = cleaning.repeat === 'Custom schedule' ? elem.date : elem;
      const order = {
        date: createDateObject(dateString),
        serviceTypeId: cleaning.selectedCleaning._id,
        extraServices: cleaning.selectedServices.map((elem) => ({ extraServiceId: elem._id, count: elem.count })),
        howFast: cleaning.selectedSpeed,
        specialInstructions: cleaning.instructions,
        cleaningSum: cleaning.cleaningSum,
        speedSum: cleaning.speedSum,
        taxPercent: cleaning.ivaPercent,
        feePercent: pricing.feePercent,
        socialSecurityPercent: pricing.socialSecurityPercent,
      };

      if (cleaning.repeat !== 'Custom schedule') {
        order.time = cleaning.time;
      } else {
        order.time = elem.time;
      }

      const obj =
        cleaning.repeat === 'One-time'
          ? cleaning
          : cleaning.repeat === 'Custom schedule'
          ? elem
          : cleaning.subscriptionPrices[index];

      order.timeCoeff = obj.timeCoeff;
      order.tariffNumber = obj.tariff;
      order.timeSum = obj.timeSum;
      order.subtotalSum = obj.subtotal;
      order.tax = obj.iva;
      order.totalSum = obj.total;
      order.feeSum = obj.subtotal * (pricing.feePercent / 100);
      order.socialSecuritySum =
        obj.subtotal -
        obj.subtotal * (pricing.feePercent / 100) -
        (obj.subtotal - obj.subtotal * (pricing.feePercent / 100)) / pricing.socialSecurityPercent;
      order.salary = (obj.subtotal - obj.subtotal * (pricing.feePercent / 100)) / pricing.socialSecurityPercent;

      if (cleaning.defaultAddressId) {
        orderObject.addressId = cleaning.defaultAddressId;
      } else {
        orderObject.address.address = cleaning.address1;
        orderObject.address.secondAddress = cleaning.address2;
        orderObject.address.postalCode = cleaning.postalCode;
        orderObject.address.city = cleaning.city;
        orderObject.address.province = cleaning.province;
        orderObject.address.size = Number(cleaning.apartmentSize);
        orderObject.address.livingRooms = Number(cleaning.livingRoomsNum.split(' ')[0]);
        orderObject.address.bedrooms = Number(cleaning.bedroomsNum.split(' ')[0]);
        orderObject.address.bathrooms = Number(cleaning.bathroomsNum.split(' ')[0]);
        orderObject.address.kitchens = Number(cleaning.kitchensNum.split(' ')[0]);
      }

      return order;
    });

    if (cleaning.repeat !== 'One-time' && cleaning.repeat !== 'Custom schedule') {
      orderObject.startDate = createDateObject(cleaning.startDate);
      orderObject.lastDate = createDateObject(cleaning.lastDate);
      orderObject.duration = cleaning.duration;
      orderObject.excludedDates = cleaning.excludedDates.every((elem) => elem.date)
        ? cleaning.excludedDates.map((elem) => createDateObject(elem.date))
        : [];
    }

    const result = await createOrder(orderObject);
    return result;
  };

  const clearStore = () => {
    dispatch(setCleaningAction(defaultState));
    sessionStorage.removeItem('cleaning');
  };

  const handlepolicyAcceptingChange = () => {
    setPolicyAccepting((state) => !state);
    setShowNotification(false);
  };

  const handleEditClick = () => {
    if (!editMode) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    setEditMode((state) => !state);
  };

  const handlePayment = async () => {
    if (policyAccepting) {
      setLoading(true);
      const result = await formOrder();
      if (result.status === 201) {
        const date = cleaning.repeat === 'One-time' ? cleaning.date : cleaning.repeat === 'Custom schedule' ? cleaning.customSchedule[0].date : cleaning.dates
        .filter((date) => {
          const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
          return !datesToRemove.includes(date);
        })[0];
        const time = cleaning.repeat === 'Custom schedule' ? cleaning.customSchedule[0].time : cleaning.time;

        if (defineIsCleaningSoon(date, time)) {
          const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
          const response = await createCheckoutSession({
            orderId: result.data.firstOrderId,
            date,
            time,
            cleaning: cleaning.selectedCleaning.type,
            extraServices: cleaning.selectedServices,
            total: cleaning.repeat === 'One-time'
              ? cleaning.total.toFixed(2)
              : cleaning.repeat === 'Custom schedule'
              ? cleaning.customSchedule[0].total.toFixed(2)
              : Number(cleaning.subscriptionPrices[cleaning.dates.indexOf(cleaning.dates
                .filter((date) => {
                  const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                  return !datesToRemove.includes(date);
                })[0])].total.toFixed(2))
          });
          clearStore();
          await stripe.redirectToCheckout({
            sessionId: response.id,
          });
        } else {
          clearStore();
          setLoading(false);
          setIsConfirmationOpen(true);
        }
      }
    } else {
      setShowNotification(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="total-summary">
          <h1 className="total-summary__title">{isConfirmation ? t('confirmation') : t('summary')}</h1>
          {!cleaning.address1 ? (
            <div className="spinner"></div>
          ) : (
            <>
              <div className="total-summary__data">
                {cleaning.repeat === 'One-time' && (
                  <div className="total-summary__one-time">
                    <div className="total-summary__line total-summary__line_important">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('date')}
                      </span>
                      <span className="total-summary__value">
                        {cleaning.date &&
                          formatDate(cleaning.date)
                            .split(', ')
                            .map((elem, index) => {
                              if (index === 1) {
                                return t(elem).slice(0, 3);
                              }
                              return elem;
                            })
                            .join(', ')}
                      </span>
                    </div>
                    <div className="total-summary__line total-summary__line_important">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('time')}
                      </span>
                      <span className="total-summary__value">{cleaning.time}</span>
                    </div>
                  </div>
                )}
                {cleaning.repeat === 'Custom schedule' && (
                  <div className="total-summary__custom">
                    <div className="total-summary__line total-summary__line_important">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/recurring')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('typeOfSchedule')}
                      </span>
                      <span className="total-summary__value">{t('custom')}</span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('startDate')}
                      </span>
                      <span className="total-summary__value">
                        {formatDate(cleaning.customSchedule[0].date)
                          .split(', ')
                          .map((elem, index) => {
                            if (index === 1) {
                              return t(elem).slice(0, 3);
                            }
                            return elem;
                          })
                          .join(', ')}
                      </span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('endDate')}
                      </span>
                      <span className="total-summary__value">
                        {formatDate(cleaning.customSchedule[cleaning.customSchedule.length - 1].date)
                          .split(', ')
                          .map((elem, index) => {
                            if (index === 1) {
                              return t(elem).slice(0, 3);
                            }
                            return elem;
                          })
                          .join(', ')}
                      </span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('numberOfCleans')}
                      </span>
                      <span className="total-summary__value">{cleaning.customSchedule.length}</span>
                    </div>
                  </div>
                )}
                {cleaning.repeat !== 'One-time' && cleaning.repeat !== 'Custom schedule' && (
                  <div className="total-summary__recurring">
                    <div className="total-summary__line total-summary__line_important">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/recurring')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('typeOfSchedule')}
                      </span>
                      <span className="total-summary__value">{t(cleaning.repeat)}</span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('startDate')}
                      </span>
                      <span className="total-summary__value">
                        {formatDate(cleaning.startDate)
                          .split(', ')
                          .map((elem, index) => {
                            if (index === 1) {
                              return t(elem).slice(0, 3);
                            }
                            return elem;
                          })
                          .join(', ')}
                      </span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('endDate')}
                      </span>
                      <span className="total-summary__value">
                        {formatDate(cleaning.lastDate)
                          .split(', ')
                          .map((elem, index) => {
                            if (index === 1) {
                              return t(elem).slice(0, 3);
                            }
                            return elem;
                          })
                          .join(', ')}
                      </span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('numberOfCleans')}
                      </span>
                      <span className="total-summary__value">
                        {
                          cleaning.dates.filter((date) => {
                            const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                            return !datesToRemove.includes(date);
                          }).length
                        }
                      </span>
                    </div>
                    <div className="total-summary__line">
                      <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                        <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/date-time')}>
                          <img className="total-summary__edit" src={edit} alt="Edit" />
                        </div>
                        {t('startTime')}
                      </span>
                      <span className="total-summary__value">{cleaning.time}</span>
                    </div>
                  </div>
                )}
                <p className={`total-summary__address total-summary__line_important ${cleaning.instructions ? '' : 'total-summary__last-line'} ${editMode ? 'edit' : ''}`}>
                  <div
                    className="total-summary__edit-wrap"
                    onClick={() =>
                      cleaning.defaultAddressId
                        ? navigate('/booking/edit/address-select')
                        : navigate('/booking/edit/address')
                    }
                  >
                    <img className="total-summary__edit" src={edit} alt="Edit" />
                  </div>
                  {`${cleaning.address1}${cleaning.address2 ? `, ${cleaning.address2}` : ''}, ${cleaning.city}, ${
                    cleaning.province
                  }, ${cleaning.postalCode}`}
                </p>
                {cleaning.instructions && (
                  <p className={`total-summary__instructions total-summary__last-line ${editMode ? 'edit' : ''}`}>
                    <div
                      className="total-summary__edit-wrap"
                      onClick={() => navigate('/booking/edit/instructions')}
                    >
                      <img className="total-summary__edit" src={edit} alt="Edit" />
                    </div>
                    {cleaning.instructions}
                  </p>
                )}
                <div className="total-summary__line">
                  <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                    <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/speed')}>
                      <img className="total-summary__edit" src={edit} alt="Edit" />
                    </div>
                    {t('howFast')}
                  </span>
                  <span className="total-summary__value">{cleaning.selectedSpeed}</span>
                </div>
                <div className="total-summary__line">
                  <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                    <div
                      className="total-summary__edit-wrap"
                      onClick={() =>
                        cleaning.defaultAddressId
                          ? navigate('/booking/edit/address-select')
                          : navigate('/booking/edit/size')
                      }
                    >
                      <img className="total-summary__edit" src={edit} alt="Edit" />
                    </div>
                    {t('apartmentSize')}
                    <sup className="top-index">2</sup>
                  </span>
                  <span className="total-summary__value">{cleaning.apartmentSize}</span>
                </div>
                <div className={`total-summary__line ${cleaning.repeat === 'One-time' ? 'underlined' : ''}`}>
                  <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                    <div
                      className="total-summary__edit-wrap"
                      onClick={() =>
                        cleaning.defaultAddressId
                          ? navigate('/booking/edit/address-select')
                          : navigate('/booking/edit/property')
                      }
                    >
                      <img className="total-summary__edit" src={edit} alt="Edit" />
                    </div>
                    {t('propertyInformation')}
                  </span>
                  <div className="total-summary__list">
                    <span className="total-summary__list-item">{t(cleaning.livingRoomsNum)}</span>
                    <span className="total-summary__list-item">{t(cleaning.bedroomsNum)}</span>
                    <span className="total-summary__list-item">{t(cleaning.bathroomsNum)}</span>
                    <span className="total-summary__list-item">{t(cleaning.kitchensNum)}</span>
                  </div>
                </div>
                <div className={cleaning.repeat === 'One-time' ? 'hidden' : 'total-summary__line'}>
                  <span className="total-summary__link" onClick={() => setIsScheduleOpen(true)}>
                    {t('seeFullSchedule')}
                  </span>
                </div>
                {cleaning.repeat !== 'One-time' && (
                  <p className="total-summary__next-cleaning">
                    {`${t('nextUpcomingCleaning')} ${formatDate(
                      cleaning.repeat === 'Custom schedule'
                        ? cleaning.customSchedule[0].date
                        : cleaning.dates.filter((date) => {
                            const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                            return !datesToRemove.includes(date);
                          })[0],
                    )
                      .split(', ')
                      .map((elem, index) => {
                        if (index === 1) {
                          return t(elem).slice(0, 3);
                        }
                        return elem;
                      })
                      .join(', ')}`}
                  </p>
                )}
                <div className="total-summary__line">
                  <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                    <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/cleaning')}>
                      <img className="total-summary__edit" src={edit} alt="Edit" />
                    </div>
                    {t(cleaning.selectedCleaning.type)}
                  </span>
                  <span className="total-summary__value">
                    {cleaning.cleaningSum &&
                      `€${
                        cleaning.repeat === 'One-time'
                          ? roundPrice(cleaning.cleaningSum * cleaning.timeCoeff)
                          : cleaning.repeat === 'Custom schedule'
                          ? roundPrice(cleaning.cleaningSum * cleaning.customSchedule[0].timeCoeff)
                          : roundPrice(
                              cleaning.cleaningSum *
                                cleaning.subscriptionPrices[
                                  cleaning.dates.indexOf(
                                    cleaning.dates.filter((date) => {
                                      const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                      return !datesToRemove.includes(date);
                                    })[0],
                                  )
                                ].timeCoeff,
                            )
                      }`}
                  </span>
                </div>
                {cleaning.selectedServices.length !== 0 && (
                  <div className="total-summary__extras">
                    <span className={`total-summary__line ${editMode ? 'edit' : ''}`}>
                      <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/extras')}>
                        <img className="total-summary__edit" src={edit} alt="Edit" />
                      </div>
                      {t('extraServices')}:
                    </span>
                    <div className="total-summary__extras-list">
                      {cleaning.selectedServices.map((service, index) => (
                        <div key={index} className="total-summary__line">
                          <span className="total-summary__name">
                            {`${t(service.type)}${service.count > 1 ? ` (x${service.count})` : ''}`}
                          </span>
                          <span className="total-summary__value">{`€${
                            cleaning.repeat === 'One-time'
                              ? roundPrice(service.price * service.count * cleaning.timeCoeff)
                              : cleaning.repeat === 'Custom schedule'
                              ? roundPrice(service.price * service.count * cleaning.customSchedule[0].timeCoeff)
                              : roundPrice(
                                  service.price *
                                    service.count *
                                    cleaning.subscriptionPrices[
                                      cleaning.dates.indexOf(
                                        cleaning.dates.filter((date) => {
                                          const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                          return !datesToRemove.includes(date);
                                        })[0],
                                      )
                                    ].timeCoeff,
                                )
                          }`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {cleaning.selectedSpeed !== 'x1' && (
                  <div className="total-summary__line">
                    <span className={`total-summary__name ${editMode ? 'edit' : ''}`}>
                      <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/speed')}>
                        <img className="total-summary__edit" src={edit} alt="Edit" />
                      </div>
                      {t('howFast')}
                    </span>
                    <span className="total-summary__value">
                      {cleaning.speedSum && `€${roundPrice(cleaning.speedSum)}`}
                    </span>
                  </div>
                )}
                <div className="total-summary__line">
                  <span className="total-summary__name">{t('subtotal')}</span>
                  <span className="total-summary__value">
                    {`€${
                      cleaning.subtotal && cleaning.repeat === 'One-time'
                        ? roundPrice(cleaning.subtotal)
                        : cleaning.repeat === 'Custom schedule'
                        ? roundPrice(cleaning.customSchedule[0].subtotal)
                        : roundPrice(
                            cleaning.subscriptionPrices[
                              cleaning.dates.indexOf(
                                cleaning.dates.filter((date) => {
                                  const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                  return !datesToRemove.includes(date);
                                })[0],
                              )
                            ].subtotal,
                          )
                    }`}
                  </span>
                </div>
                <div className="total-summary__line">
                  <span className="total-summary__name">{`${t('iva')} ${pricing.orderTaxPercent}%`}</span>
                  <span className="total-summary__value">
                    {`€${
                      cleaning.iva && cleaning.repeat === 'One-time'
                        ? roundPrice(cleaning.iva)
                        : cleaning.repeat === 'Custom schedule'
                        ? roundPrice(cleaning.customSchedule[0].iva)
                        : roundPrice(
                            cleaning.subscriptionPrices[
                              cleaning.dates.indexOf(
                                cleaning.dates.filter((date) => {
                                  const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                  return !datesToRemove.includes(date);
                                })[0],
                              )
                            ].iva,
                          )
                    }`}
                  </span>
                </div>
                <div className="total-summary__line">
                  {cleaning.paymentStatus !== 'Not paid' ? (
                    <span className="total-summary__name">
                      <svg
                        className="total-summary__tick"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M20 7L9 18L4 13"
                          stroke="#268664"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {t('paid')}
                      <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
                        {`(${t('tariff')} ${
                          cleaning.repeat === 'One-time'
                            ? cleaning.tariff
                            : cleaning.repeat === 'Custom schedule'
                            ? cleaning.customSchedule[0].tariff
                            : cleaning.dates.length !== 0 &&
                              cleaning.subscriptionPrices.length === Number(cleaning.duration)
                            ? cleaning.subscriptionPrices[
                                cleaning.dates.indexOf(
                                  cleaning.dates.filter((date) => {
                                    const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                    return !datesToRemove.includes(date);
                                  })[0],
                                )
                              ].tariff
                            : 1
                        })`}
                      </span>
                    </span>
                  ) : (
                    <span className="total-summary__name">
                      {t('total')}
                      <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
                        {`(${t('tariff')} ${
                          cleaning.repeat === 'One-time'
                            ? cleaning.tariff
                            : cleaning.repeat === 'Custom schedule'
                            ? cleaning.customSchedule[0].tariff
                            : cleaning.dates.length !== 0 &&
                              cleaning.subscriptionPrices.length === Number(cleaning.duration)
                            ? cleaning.subscriptionPrices[
                                cleaning.dates.indexOf(
                                  cleaning.dates.filter((date) => {
                                    const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                    return !datesToRemove.includes(date);
                                  })[0],
                                )
                              ].tariff
                            : 1
                        })`}
                      </span>
                    </span>
                  )}
                  <span className="total-summary__value">
                    {`€${
                      cleaning.total && cleaning.repeat === 'One-time'
                        ? roundPrice(cleaning.total)
                        : cleaning.repeat === 'Custom schedule'
                        ? roundPrice(cleaning.customSchedule[0].total)
                        : roundPrice(
                            cleaning.subscriptionPrices[
                              cleaning.dates.indexOf(
                                cleaning.dates.filter((date) => {
                                  const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                                  return !datesToRemove.includes(date);
                                })[0],
                              )
                            ].total,
                          )
                    }`}
                  </span>
                </div>
              </div>
              {loading ? (
                <div className="spinner spinner_small"></div>
              ) : (
                <>
                  <div className={editMode || isConfirmation ? 'hidden' : 'checkbox'}>
                    <input id="save" type="checkbox" checked={policyAccepting} onChange={handlepolicyAcceptingChange} />
                    <div
                      className={`checkbox__tick ${showNotification ? 'invalid' : ''}`}
                      onClick={() => setPolicyAccepting((state) => !state)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path
                          d="M11.6667 3.96484L5.25 10.3815L2.33333 7.46484"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <label htmlFor="save" className="checkbox__label">
                      {`${t('iUnderstandAndAccept')} `}
                      <NavLink to="/cancellation-policy" className="checkbox__link">
                        {t('theCancellationPolicy')}
                      </NavLink>
                      *
                    </label>
                  </div>
                  <span
                    className={isConfirmation ? 'link total-summary__policy' : 'hidden'}
                    onClick={() => navigate('/cancellation-policy')}
                  >
                    {t('learnCancellationPolicy')}
                  </span>
                  <div className={isConfirmation ? 'hidden' : 'total-summary__buttons'}>
                    <button
                      className={`btn total-summary__btn ${editMode ? 'edit' : 'btn_light'}`}
                      onClick={handleEditClick}
                    >
                      <img className={editMode ? 'hidden' : 'total-summary__edit'} src={edit} alt="Edit" />
                      {editMode ? t('save') : t('edit')}
                    </button>
                    <button
                      className={`btn total-summary__btn ${policyAccepting ? '' : 'inactive'} ${
                        editMode ? 'hidden' : ''
                      }`}
                      onClick={handlePayment}
                    >
                      {
                        defineIsCleaningSoon(cleaning.repeat === 'One-time' ? cleaning.date : cleaning.repeat === 'Custom schedule' ? cleaning.customSchedule[0].date : cleaning.dates
                        .filter((date) => {
                          const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                          return !datesToRemove.includes(date);
                        })[0], cleaning.repeat === 'Custom schedule' ? cleaning.customSchedule[0].time : cleaning.time)
                        ? t('pay')
                        : t('confirm')
                      }
                    </button>
                  </div>
                </>
              )}
              <p className={editMode || isConfirmation ? 'hidden' : 'total-summary__text'}>
                {t('weStriveToReplyWithin15Minutes')}
              </p>
            </>
          )}
        </div>
      </div>
      <ScheduleWindow
        isOpen={isScheduleOpen}
        setIsOpen={setIsScheduleOpen}
        repeat={cleaning.repeat}
        duration={cleaning.duration}
        dates={
          cleaning.repeat === 'Custom schedule'
            ? cleaning.customSchedule
            : cleaning.repeat !== 'One-time'
            ? cleaning.dates.filter((date) => {
                const datesToRemove = cleaning.excludedDates.map((elem) => elem.date);
                return !datesToRemove.includes(date);
              })
            : []
        }
        time={cleaning.time}
        subscriptionPrices={cleaning.subscriptionPrices}
        selectedCleaning={cleaning.selectedCleaning}
        selectedServices={cleaning.selectedServices}
        cleaningSum={cleaning.cleaningSum}
        selectedSpeed={cleaning.selectedSpeed}
        speedSum={cleaning.speedSum}
        ivaPercent={pricing.orderTaxPercent}
      />
      <ConfirmationModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} />
    </>
  );
};

export default Summary;
