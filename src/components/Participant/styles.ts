import {StyleSheet} from 'react-native';

import colors from '../../config/theme.json';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.mediumGrayColor,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.lightColor,
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.redColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.lightColor,
    fontSize: 24,
  },
});
