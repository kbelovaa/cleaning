import $host from './index';

export const signUp = async (name, surname, email, mobile, password, role = 'client') => {
  try {
    const { data } = await $host.post('api/auth/signup_web', { name, surname, mobile, email, password, role });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message, error: true };
    }

    return { error: 'Unexpected error' };
  }
};

export const signIn = async (email, password, role = 'client') => {
  try {
    const { data } = await $host.post('api/auth/signin_web', { email, password, role });

    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const auth = async () => {
  try {
    const { data } = await $host.get('api/auth/auth_web');
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const logOut = async () => {
  try {
    const { data } = await $host.get('api/auth/logout_web');
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const checkEmail = async (name, surname, email, mobile, role = 'client', device = 'web') => {
  try {
    const { data } = await $host.post('api/auth/check_email', { name, surname, email, mobile, role, device });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message, error: true };
    }

    return { error: 'Unexpected error' };
  }
};

export const verifyEmail = async (token) => {
  try {
    const result = await $host.get(`api/auth/verify-email/${token}`);
    return result;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};

export const getUnverifiedUser = async (userId) => {
  try {
    const result = await $host.get(`api/auth/get_unverified_user/${userId}`);
    return result;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      return { message: error.response.data.message };
    }

    return { error: 'Unexpected error' };
  }
};
