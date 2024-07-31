import { StyleSheet } from 'react-native';
import { COLORS } from 'utils/variables';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  icon: {
    width: 46,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 4,
    paddingBottom: 10,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    padding: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
