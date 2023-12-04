import { SET_IS_AUTH } from '../../constants/actionsRedux';

export const setIsAuthAction = (payload) => ({
  type: SET_IS_AUTH,
  payload,
});
