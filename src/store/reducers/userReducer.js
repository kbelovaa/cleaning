import { SET_IS_AUTH, SET_IP_COUNTRY } from '../../constants/actionsRedux';

const defaultState = {
  isAuth: false,
  ipCountry: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_IP_COUNTRY:
      return { ...state, ipCountry: action.payload };
    default:
      return state;
  }
};

export default userReducer;
