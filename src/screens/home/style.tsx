import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  textInputContainer: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
});
