import $host from './index';

const saveContactRequest = async (name, email, mobile, contactForm, language, text) => {
  try {
    const data = await $host.post('api/contact/create_request', { name, email, mobile, contactForm, language, text });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export default saveContactRequest;
