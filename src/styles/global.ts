import {StyleSheet} from 'react-native';
import fonts from './fonts';
import colors from './colors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  inner: {
    paddingVertical: 16,
  },

  text: {
    fontSize: 14,
    color: '#212121',
    fontFamily: fonts.regular,
  },

  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },

  inputContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e9e9e9',
    borderRadius: 100,
    marginBottom: 16,
  },

  section: {
    paddingBottom: 16,
  },

  button: {
    backgroundColor: '#16a085',
    padding: 8,
    borderRadius: 100,
  },

  buttonInput: {
    padding: 8,
    backgroundColor: colors.gray2,
    borderRadius: 100,
  },

  titleNote: {
    fontSize: 18,
    fontFamily: fonts.medium,
  },

  noteItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray1,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#585858',
    backgroundColor: colors.white,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.08,
    // shadowRadius: 4.59,
    // elevation: 10,
  },
});
