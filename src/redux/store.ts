import { configureStore } from '@reduxjs/toolkit';

import qrReducer from './reducers/qrReducer';

export default configureStore({
  reducer: qrReducer,
});
