import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { differenceInDays, format, parseISO, formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { formatNotificationDate } from '../../utils/formatDate';
import { markReadNotifications } from '../../http/notificationsAPI';
import RateWindow from '../RateWindow/RateWindow';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './Notifications.scss';

const Notifications = ({ isOpen, setIsOpen, newNotifications, archiveNotifications, loading, setNotifications }) => {
  const userId = useSelector((state) => state.user.id);

  const [activeTab, setActiveTab] = useState(0);
  const [newContentHeight, setNewContentHeight] = useState('auto');
  const [archiveContentHeight, setArchiveContentHeight] = useState('auto');
  const [ratedJobId, setRatedJobId] = useState('');
  const [isRateWindowOpen, setIsRateWindowOpen] = useState(false);

  const modalRef = useRef(null);
  const newContentRef = useRef(null);
  const archiveContentRef = useRef(null);
  const newScrollRef = useRef(null);
  const archiveScrollRef = useRef(null);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    setActiveTab(0);
  }, [newNotifications]);

  const resizeNotifications = (scrollRef, contentRef, setContentHeight, notifications) => {
    const { width } = window.screen;

    let outSpaceHeight;

    switch (true) {
      case width <= 744:
        outSpaceHeight = 133;
        break;
      case width <= 1024:
        outSpaceHeight = 157;
        break;
      case width <= 1440:
        outSpaceHeight = 177;
        break;
      default:
        outSpaceHeight = 197;
    }

    if (contentRef.current && scrollRef.current !== null && notifications.length > 0) {
      const contentHeight = contentRef.current.offsetHeight;
      const maxScrollHeight = window.innerHeight - outSpaceHeight;

      if (contentHeight > maxScrollHeight) {
        setContentHeight(maxScrollHeight);
        scrollRef.current.updateScroll();
      } else {
        setContentHeight('auto');
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      resizeNotifications(newScrollRef, newContentRef, setNewContentHeight, newNotifications);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [newNotifications, isOpen, activeTab]);

  useEffect(() => {
    const handleResize = () => {
      resizeNotifications(archiveScrollRef, archiveContentRef, setArchiveContentHeight, archiveNotifications);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [archiveNotifications, isOpen, activeTab]);

  const handleCloseNotifications = async () => {
    setNotifications((notifications) => notifications.map((elem) => ({ ...elem, readStatus: true })));
    setIsOpen(false);
    await markReadNotifications(userId);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseNotifications();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const formatDate = (dateStr) => {
    const date = parseISO(dateStr);
    const today = new Date();
    const difference = differenceInDays(today, date);

    if (difference >= 2) {
      return format(date, 'dd.MM.yyyy');
    }

    if (language === 'es') {
      return formatDistance(date, today, { addSuffix: true, locale: es });
    }

    return formatDistance(date, today, { addSuffix: true });
  };

  const openRateWindow = (jobId) => {
    setRatedJobId(jobId);
    setIsOpen(false);
    setIsRateWindowOpen(true);
  };

  return (
    <>
      <div className={`modal ${isOpen ? 'active' : ''}`}>
        <div className="notifications" ref={modalRef}>
          <svg
            className="notifications__close"
            onClick={handleCloseNotifications}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path d="M22.0708 22.0709L7.92862 7.92881" stroke="#268664" strokeLinecap="round" />
            <path d="M22.0714 7.92881L7.92925 22.0709" stroke="#268664" strokeLinecap="round" />
          </svg>
          <div className="notifications__panel">
            <h3 className="notifications__title">{t('notifications')}</h3>
            <div className="notifications__tabs">
              <div className={`notifications__tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                {t('new')}
              </div>
              <div className={`notifications__tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                {t('archive')}
              </div>
            </div>
          </div>
          {loading ? (
            <div className="spinner spinner_small"></div>
          ) : (
            <div className="notifications__content">
              <div
                className={`notifications__tab-content ${activeTab === 0 ? 'active' : ''}`}
                style={{ height: newContentHeight }}
              >
                {newNotifications.length === 0 ? (
                  <p className="notifications__no-data">{t('youDontHaveNewNotifications')}</p>
                ) : (
                  <PerfectScrollbar
                    ref={newScrollRef}
                    options={{
                      wheelPropagation: false,
                      autoHide: false,
                    }}
                  >
                    <div className="notifications__list new" ref={newContentRef}>
                      {newNotifications.map((elem, index) => {
                        const date = formatNotificationDate(elem.cleaningDate);
                        return (
                          <div className="notifications__item" key={index}>
                            <div className="notifications__line">
                              <h4 className="notifications__subtitle">
                                <svg
                                  className={
                                    elem.title === 'Cleaning completed' || elem.title === 'Request confirmed'
                                      ? 'notifications__tick'
                                      : 'hidden'
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.6665 8.66699L5.99984 12.0003L13.3332 4.66699"
                                    stroke="#268664"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                {t(elem.title)}
                              </h4>
                              <span className="notifications__time">{formatDate(elem.creationDate)}</span>
                            </div>
                            <div className="notifications__description">
                              {`${t(date[0])}, ${date[1]}, ${t(date[2]).slice(0, 3)} ${elem.cleaningTime}`}
                            </div>
                            {elem.description && (
                              <div className="notifications__description">{t(elem.description)}</div>
                            )}
                            <span
                              className={
                                elem.title === 'Cleaning completed' && !elem.isRated ? 'notifications__rate' : 'hidden'
                              }
                              onClick={() => openRateWindow(elem.jobId)}
                            >
                              {t('rateService')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </PerfectScrollbar>
                )}
              </div>
              <div
                className={`notifications__tab-content ${activeTab === 1 ? 'active' : ''}`}
                style={{ height: archiveContentHeight }}
              >
                {archiveNotifications.length === 0 ? (
                  <p className="notifications__no-data">{t('youDontHaveAnyNotificationsYet')}</p>
                ) : (
                  <PerfectScrollbar
                    ref={archiveScrollRef}
                    options={{
                      wheelPropagation: false,
                      autoHide: false,
                    }}
                  >
                    <div className="notifications__list" ref={archiveContentRef}>
                      {archiveNotifications.map((elem, index) => {
                        const date = formatNotificationDate(elem.cleaningDate);
                        return (
                          <div className="notifications__item" key={index}>
                            <div className="notifications__line">
                              <h4 className="notifications__subtitle">
                                <svg
                                  className={
                                    elem.title === 'Cleaning completed' || elem.title === 'Request confirmed'
                                      ? 'notifications__tick'
                                      : 'hidden'
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.6665 8.66699L5.99984 12.0003L13.3332 4.66699"
                                    stroke="#268664"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                {t(elem.title)}
                              </h4>
                              <span className="notifications__time">{formatDate(elem.creationDate)}</span>
                            </div>
                            <div className="notifications__description">
                              {`${t(date[0])}, ${date[1]}, ${t(date[2]).slice(0, 3)} ${elem.cleaningTime}`}
                            </div>
                            {elem.description && (
                              <div className="notifications__description">{t(elem.description)}</div>
                            )}
                            <span
                              className={
                                elem.title === 'Cleaning completed' && !elem.isRated ? 'notifications__rate' : 'hidden'
                              }
                              onClick={() => openRateWindow(elem.jobId)}
                            >
                              {t('rateService')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </PerfectScrollbar>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <RateWindow
        isOpen={isRateWindowOpen}
        setIsOpen={setIsRateWindowOpen}
        jobId={ratedJobId}
        setNotifications={setNotifications}
      />
    </>
  );
};

export default Notifications;
