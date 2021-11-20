import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes';
import {fontSize} from '../../../../themes/fonts';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: colors.grey,
  },
  infoContainer: {
    padding: 10,
  },
  nameStyle: {
    fontSize: fontSize.average,
    color: colors.black,
    fontWeight: 'bold',
  },
  companyNameStyle: {
    fontSize: fontSize.small,
    color: colors.black,
  },
});
