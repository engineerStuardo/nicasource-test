import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  noFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: moderateScale(40),
  },
  inputContainer: {
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    width: moderateScale(300),
    borderRadius: moderateScale(50),
    borderColor: '#9b9b9b',
    padding: moderateScale(17),
    fontSize: moderateScale(15),
  },
  flatListStyles: {
    paddingBottom: moderateScale(20),
  },
  card: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    marginTop: moderateScale(10),
    padding: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: moderateScale(0.5),
    borderColor: '#ffd96f',
    borderRadius: moderateScale(10),
  },
  cardText: {
    width: moderateScale(250),
  },
  noItemsFoundContainer: {
    alignItems: 'center',
  },
});
