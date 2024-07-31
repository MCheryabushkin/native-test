import Home from 'components/view/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../utils/variables';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Routes() {
  const getRouteIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return 'home';
      case 'Settings':
        return 'settings';
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={getRouteIcon(route.name)}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: COLORS.systemBlue,
        tabBarInactiveTintColor: COLORS.gray,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Главная' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Routes;
