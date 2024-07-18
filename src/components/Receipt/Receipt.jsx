import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getOrder } from '../../http/orderAPI';
import { setOpenedOrderAction } from '../../store/actions/ordersActions';
import { formatDate, getDateFromDateObject } from '../../utils/formatDate';
import { bathrooms, bedrooms, kitchens, livingRooms } from '../../constants/selectOptions';
import { roundPrice } from '../../utils/calculatePrice';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Receipt.scss';

const Receipt = () => {
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.orders.openedOrder);

  const [loading, setLoading] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isInvoice, setIsInvoice] = useState(false);

  const dispatch = useDispatch();

  const { orderId } = useParams();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isInvoiceReceipt = pathname.startsWith('/invoice-receipt');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const confirmation = queryParams.get('confirmation');

  const { t } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      const order = await getOrder(orderId);
      dispatch(setOpenedOrderAction(order));
    };

    if (orderId && order._id !== orderId) {
      getData();
    }

    if (isInvoiceReceipt && !confirmation) {
      setIsConfirmationOpen(true);
      setIsInvoice(true);
    }
  }, []);

  const sendToEmail = () => {
    setIsInvoice(false);
    setLoading(true);
    //отправка письма
    setLoading(false);
    setIsConfirmationOpen(true);
  };

  console.log(order);

  return (
    <>
      <div className="container">
        <div className="total-summary receipt">
          <h1 className="total-summary__title">{t('receipt')}</h1>
          {!order._id ? (
            <div className="spinner"></div>
          ) : (
            <>
              <div className="total-summary__data">
                <div className="total-summary__one-time">
                  <div className="total-summary__line total-summary__line_important">
                    <span className="total-summary__name">{t('date')}</span>
                    <span className="total-summary__value">
                      {formatDate(getDateFromDateObject(order.date))
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
                    <span className="total-summary__name">{t('time')}</span>
                    <span className="total-summary__value">{order.time}</span>
                  </div>
                </div>
                <p
                  className={`total-summary__address total-summary__line_important ${
                    order.specialInstructions ? '' : 'total-summary__last-line'
                  }`}
                >
                  {`${order.address.address}${order.address.secondAddress ? `, ${order.address.address2}` : ''}, ${
                    order.address.city
                  }, ${order.address.province}, ${order.address.postalCode}`}
                </p>
                {order.specialInstructions && (
                  <p className="total-summary__instructions total-summary__last-line">{order.specialInstructions}</p>
                )}
                <div className="total-summary__line">
                  <span className="total-summary__name">{t('howFast')}</span>
                  <span className="total-summary__value">{order.howFast}</span>
                </div>
                <div className="total-summary__line">
                  <span className="total-summary__name">
                    {t('apartmentSize')}
                    <sup className="top-index">2</sup>
                  </span>
                  <span className="total-summary__value">{order.address.size}</span>
                </div>
                <div className="total-summary__line underlined">
                  <span className="total-summary__name">{t('propertyInformation')}</span>
                  <div className="total-summary__list">
                    <span className="total-summary__list-item">
                      {t(livingRooms.find((elem) => Number(elem.split(' ')[0]) === order.address.livingRooms))}
                    </span>
                    <span className="total-summary__list-item">
                      {t(kitchens.find((elem) => Number(elem.split(' ')[0]) === order.address.kitchens))}
                    </span>
                    <span className="total-summary__list-item">
                      {t(bedrooms.find((elem) => Number(elem.split(' ')[0]) === order.address.bedrooms))}
                    </span>
                    <span className="total-summary__list-item">
                      {t(bathrooms.find((elem) => Number(elem.split(' ')[0]) === order.address.bathrooms))}
                    </span>
                  </div>
                </div>
                <div className="total-summary__line total-summary__line">
                  <span className="total-summary__name">{t(order.serviceType.type)}</span>
                  <span className="total-summary__value">
                    {`€${roundPrice(order.orderPriceId.cleaningSum * order.orderPriceId.timeCoeff)}`}
                  </span>
                </div>
                {order.extraServices.length !== 0 && (
                  <div className="total-summary__extras">
                    <span className="total-summary__line">{t('extraServices')}:</span>
                    <div className="total-summary__extras-list">
                      {order.extraServices.map((service, index) => (
                        <div key={index} className="total-summary__line">
                          <span className="total-summary__name">
                            {`${t(service.type)}${service.count > 1 ? ` (x${service.count})` : ''}`}
                          </span>
                          <span className="total-summary__value">{`€${roundPrice(
                            service.price * service.count * order.orderPriceId.timeCoeff,
                          )}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {order.howFast !== 'x1' && (
                  <div className="total-summary__line">
                    <span className="total-summary__name">{t('howFast')}</span>
                    <span className="total-summary__value">{`€${roundPrice(order.orderPriceId.speedSum)}`}</span>
                  </div>
                )}
                <div className="total-summary__line">
                  <span className="total-summary__name">{t('subtotal')}</span>
                  <span className="total-summary__value">{`€${roundPrice(order.orderPriceId.subtotalSum)}`}</span>
                </div>
                <div className="total-summary__line">
                  <span className="total-summary__name">{`${t('iva')} ${order.orderPriceId.taxPercent}%`}</span>
                  <span className="total-summary__value">{`€${roundPrice(order.orderPriceId.tax)}`}</span>
                </div>
                <div className="total-summary__line">
                  <span className="total-summary__name">
                    {order.paymentStatus !== 'Not paid' && (
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
                    )}
                    <span className="total-summary__status">
                      {order.paymentStatus === 'Not paid' ? t('total') : t('paid')}
                      {order.paymentStatus !== 'Not paid' && ` (${getDateFromDateObject(order.paymentDate)})`}
                      <span className="link total-summary__tariff" onClick={() => navigate('/info-price')}>
                        {`(${t('tariff')} ${order.orderPriceId.tariffNumber})`}
                      </span>
                    </span>
                  </span>
                  <span className="total-summary__value">{`€${roundPrice(order.orderPriceId.totalSum)}`}</span>
                </div>
              </div>
              {loading ? (
                <div className="spinner spinner_small"></div>
              ) : (
                <button className={user.isAuth ? 'btn total-summary__btn' : 'hidden'} onClick={sendToEmail}>
                  {t('sendToEmail')}
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        setIsOpen={setIsConfirmationOpen}
        email={user.email}
        isInvoice={isInvoice}
        isAwaiting={true}
      />
    </>
  );
};

export default Receipt;
