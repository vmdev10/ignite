import {StyleSheet} from 'react-native';

import colors from '../../config/theme.json';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrayColor,
    padding: 20,
  },
  eventName: {
    color: colors.lightColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  eventData: {
    color: colors.lightGrayColor,
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: colors.mediumGrayColor,
    height: 56,
    borderRadius: 5,
    color: colors.lightColor,
    padding: 16,
    fontSize: 16,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: colors.greenColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.lightColor,
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  containerList: {
    marginVertical: 5,
  },
  listEmptyText: {
    color: colors.lightColor,
    textAlign: 'center',
  },
});
