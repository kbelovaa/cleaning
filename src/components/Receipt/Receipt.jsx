import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../http/orderAPI';
import './Receipt.scss';

const Receipt = () => {
  const [order, setOrder] = useState({});

  const { orderId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const order = await getOrder(orderId);
      setOrder(order);
    };

    if (orderId) {
      getData();
    }
  }, [orderId]);

  return (
    <>
      <div className="container">
        <div className="total-summary">
          <h1 className="total-summary__title">Receipt</h1>
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
                <p className={`total-summary__address total-summary__line_important ${editMode ? 'edit' : ''}`}>
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
                    <div className="total-summary__edit-wrap" onClick={() => navigate('/booking/edit/size')}>
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
                  {isConfirmation ? (
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
                      {t('pay')}
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
    </>
  );
};

export default Receipt;
