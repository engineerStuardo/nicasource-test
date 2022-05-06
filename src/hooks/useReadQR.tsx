import { useState, useCallback } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { addQR } from '../redux/actions/qr';

export const useReadQR = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, [])
  );

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    alert(
      `The QR has been scanned with text: "${data}" and added to your list!`
    );
    dispatch(addQR(data));
  };

  return { hasPermission, scanned, handleBarCodeScanned, setScanned };
};
