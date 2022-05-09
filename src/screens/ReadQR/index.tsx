import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { SafeArea } from '@components';
import { useReadQR } from '@useReadQR';

import { styles } from './styles';

export const ReadQR = () => {
  const { hasPermission, scanned, handleBarCodeScanned, setScanned } =
    useReadQR();

  if (hasPermission === null) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <SafeArea style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.text}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </SafeArea>
  );
};
