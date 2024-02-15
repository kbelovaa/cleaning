import React from 'react';
import { useTranslation } from 'react-i18next';
import './CancellationPolicy.scss';

const CancellationPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="cancellation-wrap">
      <div className="container">
        <div className="cancellation">
          <h2 className="cancellation__title">{t('cancellationPolicy')}</h2>
          <div className="cancellation__point">
            <p className="cancellation__text">{t('cancelOrEditAppointment')}</p>
            <p className="cancellation__text">{t('plansCanChange')}</p>
          </div>
          <div className="cancellation__point">
            <table className="cancellation__conditions">
              <thead>
                <tr className="cancellation__line">
                  <th className="cancellation__header">{t('timeOfCancellationOrEdit')}</th>
                  <th className="cancellation__header">{t('refund')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('within1HourOfBooking')}</td>
                  <td className="cancellation__column">{t('fullRefund')}</td>
                </tr>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('over24HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('fullRefund')}</td>
                </tr>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('between24And12HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('partialRefund50')}</td>
                </tr>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('lessThan12HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('noRefund')}</td>
                </tr>
              </tbody>
            </table>
            <p className="cancellation__text">{t('noteOnTiming')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('refundProcess')}</h3>
            <p className="cancellation__text">{t('refundsForCancellations')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('exceptionalCircumstances')}</h3>
            <p className="cancellation__text">{t('unforeseenSituations')}</p>
            <p className="cancellation__text">{t('clarityAndTransparency')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
