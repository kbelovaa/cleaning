import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfUse = () => {
  const [currentRefIndex, setCurrentRefIndex] = useState(null);

  const blocksRefs = Array(25)
    .fill()
    .map(() => React.createRef());

  const { t } = useTranslation();

  useEffect(() => {
    if (currentRefIndex !== null && blocksRefs[currentRefIndex]) {
      const element = blocksRefs[currentRefIndex].current;
      const header = document.getElementById('header');
      const y = element.getBoundingClientRect().top + window.scrollY - header.clientHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setCurrentRefIndex(null);
    }
  }, [currentRefIndex]);

  return (
    <div className="container">
      <div className="legals">
        <h2 className="legals__title">{t('termsOfUse')}</h2>
        <div className="legals__text-block">
          <p className="legals__text">{t('lastUpdated')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse1')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse2')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            {t('termsOfUse3')}{' '}
            <a className="link" href="/">
              https://www.sdl24.es/
            </a>{' '}
            {t('termsOfUse4')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse5')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse6')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse7')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse8')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse9')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse10')}</p>
        </div>
        <div className="legals__text-block">
          <ul className="legals__list">
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(0)}>
                1. {t('termsOfUse11')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(1)}>
                2. {t('termsOfUse12')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(2)}>
                3. {t('termsOfUse13')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(3)}>
                4. {t('termsOfUse14')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(4)}>
                5. {t('termsOfUse15')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(5)}>
                6. {t('termsOfUse16')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(6)}>
                7. {t('termsOfUse17')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(7)}>
                8. {t('termsOfUse18')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(8)}>
                9. {t('termsOfUse19')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(9)}>
                10. {t('termsOfUse20')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(10)}>
                11. {t('termsOfUse21')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(11)}>
                12. {t('termsOfUse22')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(12)}>
                13. {t('termsOfUse23')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(13)}>
                14. {t('termsOfUse24')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(14)}>
                15. {t('termsOfUse25')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(15)}>
                16. {t('termsOfUse26')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(16)}>
                17. {t('termsOfUse27')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(17)}>
                18. {t('termsOfUse28')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(18)}>
                19. {t('termsOfUse29')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(19)}>
                20. {t('termsOfUse30')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(20)}>
                21. {t('termsOfUse31')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(21)}>
                22. {t('termsOfUse32')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(22)}>
                23. {t('termsOfUse33')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(23)}>
                24. {t('termsOfUse34')}
              </p>
            </li>
            <li>
              <p className="legals__text legals__item" onClick={() => setCurrentRefIndex(24)}>
                25. {t('termsOfUse35')}
              </p>
            </li>
          </ul>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[0]}>
            1. {t('termsOfUse11')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse36')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[1]}>
            2. {t('termsOfUse12')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse37')}</p>
          <p className="legals__text">{t('termsOfUse38')}</p>
          <p className="legals__text">{t('termsOfUse39')}</p>
          <p className="legals__text">{t('termsOfUse40')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse41')}</p>
          <p className="legals__text">
            {t('termsOfUse42')}
            <span className="legals__item" onClick={() => setCurrentRefIndex(6)}>
              "{t('termsOfUse17')}"
            </span>
            {t('termsOfUse43')}
          </p>
          <ul>
            <li>
              <p className="legals__text">{t('termsOfUse44')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse45')}</p>
            </li>
          </ul>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse46')}</p>
          <p className="legals__text">{t('termsOfUse47')}</p>
          <p className="legals__text">{t('termsOfUse48')}</p>
          <p className="legals__text">{t('termsOfUse49')}</p>
          <p className="legals__text">{t('termsOfUse50')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse51')}</p>
          <p className="legals__text">
            {t('termsOfUse52')}
            <span className="legals__item" onClick={() => setCurrentRefIndex(6)}>
              "{t('termsOfUse17')}"
            </span>
            {t('termsOfUse53')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            <span className="legals__text legals__subtitle">{t('termsOfUse54')}</span> {t('termsOfUse55')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            <span className="legals__text legals__subtitle">{t('termsOfUse56')}</span> {t('termsOfUse57')}
          </p>
          <ul>
            <li>
              <p className="legals__text">
                {t('termsOfUse58')}
                <span className="legals__item" onClick={() => setCurrentRefIndex(6)}>
                  "{t('termsOfUse17')}"
                </span>
                {t('termsOfUse59')}
              </p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse60')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse61')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse62')}</p>
            </li>
          </ul>
          <p className="legals__text">{t('termsOfUse63')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[2]}>
            3. {t('termsOfUse13')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse64')}</p>
          <p className="legals__text">{t('termsOfUse65')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[3]}>
            4. {t('termsOfUse14')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse66')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[4]}>
            5. {t('termsOfUse15')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse67')}</p>
          <ul>
            <li>
              <p className="legals__text">Stripe</p>
            </li>
            <li>
              <p className="legals__text">Visa</p>
            </li>
            <li>
              <p className="legals__text">Mastercard</p>
            </li>
          </ul>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse68')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse69')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse70')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[5]}>
            6. {t('termsOfUse16')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse71')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[6]}>
            7. {t('termsOfUse17')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse72')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse73')}</p>
          <ul>
            <li>
              <p className="legals__text">{t('termsOfUse74')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse75')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse76')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse77')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse78')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse79')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse80')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse81')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse82')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse83')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse84')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse85')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse86')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse87')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse88')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse89')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse90')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse91')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse92')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse93')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse94')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse95')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse96')}</p>
            </li>
          </ul>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[7]}>
            8. {t('termsOfUse18')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse97')}</p>
          <ul>
            <li>
              <p className="legals__text">{t('termsOfUse98')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse99')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse100')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse101')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse102')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse103')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse104')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse105')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse106')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse107')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse108')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse109')}</p>
            </li>
            <li>
              <p className="legals__text">{t('termsOfUse110')}</p>
            </li>
          </ul>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse111')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[8]}>
            9. {t('termsOfUse19')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse112')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse113')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse114')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[9]}>
            10. {t('termsOfUse20')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse115')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse116')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[10]}>
            11. {t('termsOfUse21')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse117')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[11]}>
            12. {t('termsOfUse22')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse118')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[12]}>
            13. {t('termsOfUse23')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">
            {t('termsOfUse119')}{' '}
            <a className="link" href="/privacy-policy">
              https://www.sdl24.es/privacy-policy
            </a>
            . {t('termsOfUse141')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[13]}>
            14. {t('termsOfUse24')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse120')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse121')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[14]}>
            15. {t('termsOfUse25')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse122')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse123')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[15]}>
            16. {t('termsOfUse26')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse124')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[16]}>
            17. {t('termsOfUse27')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse125')}</p>
          <p className="legals__text">{t('termsOfUse126')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse127')}</p>
          <p className="legals__text">{t('termsOfUse128')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse129')}</p>
          <p className="legals__text">{t('termsOfUse130')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">{t('termsOfUse131')}</p>
          <p className="legals__text">{t('termsOfUse132')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[17]}>
            18. {t('termsOfUse28')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse133')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[18]}>
            19. {t('termsOfUse29')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse134')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[19]}>
            20. {t('termsOfUse30')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse135')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[20]}>
            21. {t('termsOfUse31')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse136')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[21]}>
            22. {t('termsOfUse32')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse137')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[22]}>
            23. {t('termsOfUse33')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse138')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[23]}>
            24. {t('termsOfUse34')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse139')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle" ref={blocksRefs[24]}>
            25. {t('termsOfUse35')}
          </p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text">{t('termsOfUse140')}</p>
        </div>
        <div className="legals__text-block">
          <p className="legals__text legals__subtitle">FIRST LUXURY REALTY MARBELLA SL</p>
          <p className="legals__text legals__subtitle">Carretera de Cadiz, km 176 Centro de Negocios Oasis, local 9</p>
          <p className="legals__text legals__subtitle">Marbella, Málaga 29602</p>
          <p className="legals__text legals__subtitle">{t('cookie62')}</p>
          <p className="legals__text legals__subtitle">info@sdl24.es</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
