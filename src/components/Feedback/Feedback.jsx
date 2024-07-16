import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Feedback.scss';

const Feedback = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [containerWidthVisible, setContainerWidthVisible] = useState(0);
  const [containerWidthScroll, setContainerWidthScroll] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    const container = document.getElementById('feedback');
    const handleResize = () => {
      const containerWidthVisible = container.offsetWidth;
      const containerWidthScroll = container.scrollWidth;
      setContainerWidthVisible(containerWidthVisible);
      setContainerWidthScroll(containerWidthScroll);
    };

    const handleWheel = (event) => {
      const atLeftEdge = container.scrollLeft === 0;
      const atRightEdge = container.scrollLeft + containerWidthVisible >= containerWidthScroll;

      if ((event.deltaY < 0 && !atLeftEdge) || (event.deltaY > 0 && !atRightEdge)) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, [containerWidthVisible]);

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    const percent = scrollLeft / (containerWidthScroll - containerWidthVisible);
    setScrollPercent(percent);
  };

  const defineDotStyle = (diff) => {
    const res = Math.abs(scrollPercent - diff);
    if (res < 0.2) {
      return 'feedback__dot feedback__dot_1';
    }

    if (res >= 0.2 && res < 0.4) {
      return 'feedback__dot feedback__dot_2';
    }

    if (res >= 0.4 && res < 0.6) {
      return 'feedback__dot feedback__dot_3';
    }

    if (res >= 0.6 && res < 0.8) {
      return 'feedback__dot feedback__dot_4';
    }

    return 'feedback__dot feedback__dot_5';
  };

  return (
    <div className="feedback">
      <div id="feedback" className="feedback__wrap" onScroll={handleScroll}>
        {Array.from({ length: 21 }).map((_, i) => (
          <div className="feedback__card" key={i}>
            <div className="feedback__info">
              <div className="feedback__stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    className="feedback__star"
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.9988 8.92203L3.09043 10.4511L3.64588 7.21253L1.29295 4.919L4.54462 4.44651L5.9988 1.5L7.45299 4.44651L10.7047 4.919L8.35173 7.21253L8.90718 10.4511L5.9988 8.92203Z"
                      fill="#268664"
                      stroke="#268664"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ))}
              </div>
              <p className="feedback__text">{t(`feedback${i + 1}`)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback__indicator">
        <div className={defineDotStyle(0.05)}></div>
        <div className={defineDotStyle(0.25)}></div>
        <div className={defineDotStyle(0.45)}></div>
        <div className={defineDotStyle(0.65)}></div>
        <div className={defineDotStyle(0.85)}></div>
      </div>
    </div>
  );
};

export default Feedback;
