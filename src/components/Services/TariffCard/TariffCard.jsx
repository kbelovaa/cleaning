import React from 'react';
import { useTranslation } from 'react-i18next';
import './TariffCard.scss';

const TariffCard = ({ pricing }) => {
  const { t } = useTranslation();

  return (
    <div className="tariff-card">
      <h3 className="tariff-card__title">{`${t('tariff')} ${pricing.tariffNumber}`}</h3>
      <span className="tariff-card__percent">{`${Math.round((pricing.coefficient - 1) * 100)}%`}</span>
      <span className="tariff-card__period">{pricing.isWeekend ? `${t('Saturday')} - ${t('Sunday')}` : `${t('Monday')} - ${t('Friday')}`}</span>
      {pricing.isWeekend && <span className="tariff-card__period">{`& ${t('holidays')}`}</span>}
      <span className="tariff-card__period">{`${pricing.startTime} - ${Number(pricing.endTime.split(':')[0]) + 1}:00`}</span>
    </div>
  );
};

export default TariffCard;
