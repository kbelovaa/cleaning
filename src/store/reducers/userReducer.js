import { SET_IS_AUTH, SET_IP_COUNTRY, SET_USER } from '../../constants/actionsRedux';

const defaultState = {
  isAuth: false,
  ipCountry: '',
  id: '',
  name: '',
  surname: '',
  mobile: '',
  email: '',
  role: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_IP_COUNTRY:
      return { ...state, ipCountry: action.payload };
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
