import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const useListQR = () => {
  const [inputText, setInputText] = useState('');
  const { QRData } = useSelector(state => state);
  const [filteredQR, setFilteredQR] = useState(QRData);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredQR(QRData);
  }, [QRData]);

  const onChangeText = (text: string) => {
    setInputText(text);
    if (!text) setFilteredQR(QRData);
    setFilteredQR(
      QRData.filter((item: { qr: string }) =>
        item.qr.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return {
    dispatch,
    QRData,
    onChangeText,
    inputText,
    filteredQR,
    setInputText,
  };
};
