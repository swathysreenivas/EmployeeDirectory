import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainerStyle: {
    paddingBottom: 100,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 6,
    backgroundColor: colors.grey,
    alignSelf: 'center',
    marginVertical: 25,
  },
});
