import { Text, View, StyleSheet } from 'react-native';
import { IS_ANDROID } from 'utils/consts';

export const Header = () => {
  return (
    <View style={styles.root}>
      <Text>Это шапка приложения</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'grey',
    padding: 20,
    paddingTop: IS_ANDROID ? 35 : 0,
    alignItems: 'center',
  },
});
