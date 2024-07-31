import { useEffect, useState } from 'react';
// import { store, StoreContext, trunk } from 'store';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import Routes from 'routes';

const App = () => {
  const [isStoreLoaded, setIsStoreLoaded] = useState(false);

  // useEffect(() => {
  //   const rehydrate = async () => {
  //     await trunk.init();
  //     setIsStoreLoaded(true);
  //   };
  //   rehydrate();
  // }, []);
  //
  // if (!isStoreLoaded) {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  return (
    // <StoreContext.Provider value={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
