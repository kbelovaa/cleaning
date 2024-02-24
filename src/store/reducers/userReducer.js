import {
  SET_IS_AUTH,
  SET_IP_COUNTRY,
  SET_USER,
  SET_ADDRESSES,
  SET_UPDATED_ADDRESSES,
} from '../../constants/actionsRedux';

const defaultState = {
  isAuth: false,
  ipCountry: '',
  id: '',
  name: '',
  surname: '',
  mobile: '',
  email: '',
  role: '',
  addresses: [],
};

const updateAddresses = (state, updatedAddress) => {
  const existingAddressIndex = state.addresses.findIndex((address) => address._id === updatedAddress._id);

  if (existingAddressIndex !== -1) {
    const updatedAddresses = [...state.addresses];
    updatedAddresses[existingAddressIndex] = updatedAddress;

    return updatedAddresses;
  }

  const updatedAddresses = [updatedAddress, ...state.addresses.map((address) => ({ ...address, isDefault: false }))];

  return updatedAddresses;
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case SET_IP_COUNTRY:
      return { ...state, ipCountry: action.payload };
    case SET_USER:
      return { ...state, ...action.payload };
    case SET_ADDRESSES:
      return { ...state, addresses: action.payload };
    case SET_UPDATED_ADDRESSES:
      return {
        ...state,
        addresses: updateAddresses(state, action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
