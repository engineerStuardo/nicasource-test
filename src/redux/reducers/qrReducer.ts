import { ADD_QR, DELETE_QR } from '../actions/action-types';

interface Action {
  type: 'ADD_QR' | 'DELETE_QR';
  data: string | number;
}

const initialState = {
  QRData: [],
};

const qrReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_QR:
      return {
        ...state,
        QRData: state.QRData.concat({
          key: Math.random(),
          qr: action.data.toString(),
        }),
      };
    case DELETE_QR:
      return {
        ...state,
        QRData: state.QRData.filter(
          (item: { key: number }) => item.key !== action.data
        ),
      };
    default:
      return state;
  }
};

export default qrReducer;
