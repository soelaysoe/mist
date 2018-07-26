export const initialState = {
  from: '',
  gasPrice: '',
  gas: '',
  data: '',
  to: '',
  toIsContract: false,
  isNewContract: false,
  unlocking: false
  // destinationType: 'address', 'contract', 'new' ?
};

const newTransaction = (state = initialState, action) => {
  switch (action.type) {
    case '[CLIENT]:NEW_TRANSACTION:START':
      return Object.assign({}, initialState, action.payload);
    case '[CLIENT]:DETERMINE_IF_CONTRACT:SUCCESS':
      return Object.assign({}, state, {
        toIsContract: action.payload.toIsContract,
        isNewContract: action.payload.isNewContract
      });
    case '[CLIENT]:CONFIRM_TRANSACTION:START':
      return Object.assign({}, state, { unlocking: true });
    case '[CLIENT]:CONFIRM_TRANSACTION:SUCCESS':
      return Object.assign({}, state, { unlocking: false });
    case '[CLIENT]:CONFIRM_TRANSACTION:FAILURE':
      return Object.assign({}, state, { unlocking: false });
    default:
      return state;
  }
};

export default newTransaction;
