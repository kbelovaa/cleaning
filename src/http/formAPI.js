import $host from './index';

const sendData = async (surveyData) => {
  try {
    const data = await $host.post('api/survey/save_survey_data', surveyData);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export default sendData;
