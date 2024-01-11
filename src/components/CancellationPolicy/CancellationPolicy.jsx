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
            <h3 className="cancellation__subtitle">{t('shortAnswer')}:</h3>
            <p className="cancellation__text">{t('cancelOrEditAppointment')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('cancellationPolicy')}:</h3>
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
                  <td className="cancellation__column">{t('over48HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('fullRefund')}</td>
                </tr>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('between24And48HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('partialRefund50')}</td>
                </tr>
                <tr className="cancellation__line">
                  <td className="cancellation__column">{t('lessThan24HoursInAdvance')}</td>
                  <td className="cancellation__column">{t('partialRefund100')}</td>
                </tr>
              </tbody>
            </table>
            <p className="cancellation__text">{t('noteOnTiming')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('refundProcess')}:</h3>
            <p className="cancellation__text">{t('refundsForCancellations')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('exceptionalCircumstances')}:</h3>
            <p className="cancellation__text">{t('unforeseenSituations')}</p>
            <p className="cancellation__text">{t('clarityAndTransparency')}</p>
          </div>
          <div className="cancellation__point">
            <h3 className="cancellation__subtitle">{t('exampleScenarios')}:</h3>
            <p className="cancellation__text">{t('michelleReservation')}</p>
          </div>
          <div className="cancellation__point">
            <h4 className="cancellation__subtitle cancellation__subtitle_scenario">{t('scenario1')}</h4>
            <p className="cancellation__text">{t('michelleCancelsBefore48Hours')}</p>
            <p className="cancellation__text">{t('michelleCancelsOnWednesday')}</p>
            <p className="cancellation__text">{t('michelleCancelsAfter9AMThursday')}</p>
          </div>
          <div className="cancellation__point">
            <h4 className="cancellation__subtitle cancellation__subtitle_scenario">{t('scenario2')}</h4>
            <p className="cancellation__text">{t('lloydChangeWithin1Hour')}</p>
            <p className="cancellation__text">{t('lloydScheduledCleaning')}</p>
            <p className="cancellation__text">{t('lloydChangeBetween9AMOnSaturdayAnd9AMOnSunday')}</p>
            <p className="cancellation__text">{t('lloydChangeAfter9AMOnSunday')}</p>
          </div>
          <div className="cancellation__point">
            <h4 className="cancellation__subtitle cancellation__subtitle_scenario">{t('scenario3')}</h4>
            <p className="cancellation__text">{t('monicaBookedCleaning')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
