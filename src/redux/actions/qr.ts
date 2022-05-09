import { ADD_QR, DELETE_QR } from './action-types';

export const addQR = (qr: string) => ({ type: ADD_QR, data: qr });

export const deleteQR = (key: number) => ({ type: DELETE_QR, data: key });
