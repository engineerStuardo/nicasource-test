import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';

import { SafeArea } from '@components';
import ScanQRSVG from '@assets/qr-code-svgrepo-com.svg';
import WarningSVG from '@assets/warning-svgrepo-com.svg';
import DeleteSVG from '@assets/delete.svg';
import { useListQR } from '@useListQR';
import { deleteQR } from '@reduxAction';
import { Props } from './interfaces';

import { styles } from './styles';

export const ListQR = () => {
  const {
    dispatch,
    QRData,
    onChangeText,
    inputText,
    filteredQR,
    setInputText,
  } = useListQR();

  if (!QRData.length) {
    return (
      <View style={styles.noFoundContainer}>
        <ScanQRSVG width={moderateScale(80)} height={moderateScale(80)} />
        <Text style={{ fontSize: 17 }}>No items found.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: Props) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.qr}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteQR(item.key));
          setInputText('');
        }}
      >
        <DeleteSVG width={moderateScale(30)} height={moderateScale(30)} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeArea style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Search QR...'}
          placeholderTextColor={'#b9b9b9'}
          value={inputText}
          onChangeText={onChangeText}
        />
      </View>
      {filteredQR.length ? (
        <FlatList
          contentContainerStyle={styles.flatListStyles}
          data={filteredQR}
          renderItem={renderItem}
          keyExtractor={item => item.key.toString()}
        />
      ) : (
        <View style={styles.noItemsFoundContainer}>
          <WarningSVG width={moderateScale(80)} height={moderateScale(80)} />
          <Text>No items found. Try again.</Text>
        </View>
      )}
    </SafeArea>
  );
};
