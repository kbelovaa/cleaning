import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import sendData from '../../http/formAPI';
import questions from '../../constants/surveyQuestions';
import PhoneField from '../PhoneField/PhoneField';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './Survey.scss';

const Survey = () => {
  const ipCountry = useSelector((state) => state.user.ipCountry);

  const [answers, setAnswers] = useState({});
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [text, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (ipCountry && sessionStorage.getItem('survey')) {
      const survey = JSON.parse(sessionStorage.getItem('survey'));
      setAnswers(survey.answers);
      setName(survey.name);
      setSurname(survey.surname);
      setEmail(survey.email);
      setMobile(survey.mobile);
      setText(survey.text);
    }
  }, [ipCountry]);

  useEffect(() => {
    const surveyState = {
      answers,
      name,
      surname,
      email,
      mobile: mobile.replace(/^[+]+/, ''),
      text,
    };
    if (ipCountry) {
      sessionStorage.setItem('survey', JSON.stringify(surveyState));
    }
  }, [answers, name, surname, email, mobile, text]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (
      name &&
      surname &&
      email &&
      isEmailValid &&
      mobile &&
      isMobileValid &&
      answers.surveyQuestion1 &&
      answers.surveyQuestion2 &&
      answers.surveyQuestion3 &&
      answers.surveyQuestion4 &&
      answers.surveyQuestion5
    ) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      setLoading(true);
      const surveyData = {
        name,
        surname,
        email,
        mobile: `+${mobile}`,
        text,
        answers,
      };
      const result = await sendData(surveyData);

      if (result.status === 201) {
        setIsConfirmationOpen(true);
        setLoading(false);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="survey__wrap">
      <div className="container">
        <div className="survey">
          <h2 className="survey__title">{t('joinWaitingList')}</h2>
          <p className="survey__note">{t('secureSpot')}</p>
          <form className={`survey__form ${isFormValid ? 'valid' : 'invalid'}`}>
            {questions.map((elem, index) => (
              <div className="survey__question" key={index}>
                <p className="survey__question-title">{t(`surveyQuestion${index + 1}`)}</p>
                {elem.variants.map((variant, variantIndex) => (
                  <label className="survey__option" key={variantIndex}>
                    <input
                      type="radio"
                      name={`surveyQuestion${index + 1}`}
                      value={variant}
                      checked={answers[`surveyQuestion${index + 1}`] === variant}
                      onChange={() => handleAnswerChange(`surveyQuestion${index + 1}`, variant)}
                    />
                    <svg
                      className={`survey__radio-checked ${answers[`surveyQuestion${index + 1}`] ? '' : 'empty'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                        fill="#E8E7E7"
                      />
                      <path
                        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                        fill="transparent"
                      />
                    </svg>
                    {t(variant)}
                  </label>
                ))}
              </div>
            ))}
          </form>
        </div>
        <ConfirmationModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} />
      </div>
      <div className="form__fields-wrap">
        <div className="container">
          <div className={`form__fields ${isFormValid ? 'valid' : 'invalid'}`}>
            <div className="form__field-wrap">
              <label htmlFor="name" className="form__label">
                {t('name')}
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!name ? 'invalid-field' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="surname" className="form__label">
                {t('surname')}
              </label>
              <input
                id="surname"
                type="text"
                className={`input ${!surname ? 'invalid-field' : ''}`}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="email" className="form__label">
                {t('email')}
              </label>
              <input
                id="email"
                type="text"
                className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isEmailValid ? 'hidden' : 'form__note'}>{t('validEmailMessage')}</p>
            </div>
            <div className="form__field-wrap">
              <PhoneField
                mobile={mobile}
                setMobile={setMobile}
                isMobileValid={isMobileValid}
                setIsMobileValid={setIsMobileValid}
              />
            </div>
            <div className="form__field-wrap">
              <label htmlFor="text" className="form__label">
                {t('textOptional')}
              </label>
              <textarea
                id="text"
                rows="1"
                className="input form__message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
              <p
                className={
                  !isFormValid &&
                  (!name ||
                    !surname ||
                    !email ||
                    !mobile ||
                    !answers.surveyQuestion1 ||
                    !answers.surveyQuestion2 ||
                    !answers.surveyQuestion3 ||
                    !answers.surveyQuestion4 ||
                    !answers.surveyQuestion5)
                    ? 'form__note'
                    : 'hidden'
                }
              >
                {t('fillInAllFieldsMessage')}
              </p>
            </div>
          </div>
          {loading ? (
            <div className="spinner spinner_small"></div>
          ) : (
            <button className={`btn survey__btn ${checkIsFormValid() ? '' : 'inactive'}`} onClick={handleFormSubmit}>
              {t('join')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
