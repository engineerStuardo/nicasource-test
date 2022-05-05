import { ADD_QR, DELETE_QR, SEARCH_QR } from '../actions/action-types';

interface Action {
  type: 'ADD_QR' | 'DELETE_QR' | 'SEARCH_QR';
  data: string | number;
}

const initialState = {
  qrList: [],
};

const qrReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_QR:
      return {
        ...state,
        qrList: state.qrList.concat({ key: Math.random(), qr: action.data }),
      };
    case DELETE_QR:
      return {
        ...state,
        qrList: state.qrList.filter(
          (item: { key: number }) => item.key !== action.data
        ),
      };
    case SEARCH_QR:
      return {
        ...state,
        qrList: state.qrList.filter((item: { qr: string }) =>
          item.qr.includes(action.data.toString())
        ),
      };
    default:
      return state;
  }
};

export default qrReducer;
