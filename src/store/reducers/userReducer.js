import { SET_IS_AUTH } from '../../constants/actionsRedux';

const defaultState = {
  isAuth: true,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default userReducer;
