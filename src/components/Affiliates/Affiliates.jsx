import React from 'react';
import { useTranslation } from 'react-i18next';
import './Affiliates.scss';

const Affiliates = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="affiliate-page">
        <section className="affiliate">
          <h2 className="affiliate__title">{t('affiliateProgram')}</h2>
          <h3 className="affiliate__subtitle">{t('priorityCleaningServices')}</h3>
          <p className="affiliate__text">{t('priorityCleaningServicesText')}</p>
          <h3 className="affiliate__subtitle">{t('referralRewards')}</h3>
          <p className="affiliate__text">{t('referralRewardsText')}</p>
          <h3 className="affiliate__subtitle">{t('giftCards')}</h3>
          <p className="affiliate__text">{t('giftCardsText')}</p>
        </section>
        <section className="affiliate">
          <h2 className="affiliate__title">{t('howToJoin')}</h2>
          <h3 className="affiliate__subtitle">{t('signUp')}</h3>
          <p className="affiliate__text">{t('signUpText')}</p>
          <h3 className="affiliate__subtitle">{t('refer')}</h3>
          <p className="affiliate__text">{t('referText')}</p>
          <h3 className="affiliate__subtitle">{t('earn')}</h3>
          <p className="affiliate__text">{t('earnText')}</p>
        </section>
        <section className="affiliate">
          <h2 className="affiliate__title">{t('whyPartner')}</h2>
          <h3 className="affiliate__subtitle">{t('convenience')}</h3>
          <p className="affiliate__text">{t('convenienceText')}</p>
          <h3 className="affiliate__subtitle">{t('commitment')}</h3>
          <p className="affiliate__text">{t('commitmentText')}</p>
          <h3 className="affiliate__subtitle">{t('strategicEdge')}</h3>
          <p className="affiliate__text">{t('strategicEdgeText')}</p>
        </section>
        <p className="affiliate__text">{t('affiliateText')}</p>
      </div>
    </div>
  );
};

export default Affiliates;
