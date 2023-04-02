import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  text: {
    fontSize: 14,
    color: '#212121',
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
});
