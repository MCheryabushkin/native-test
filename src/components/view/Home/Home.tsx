import { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import moment from 'moment';
import 'moment/locale/ru';

import { Card } from 'components/view/Card';
// import UserStore from 'store/UserStore';
import { styles } from './styles';

const Home = () => {
  // const getUsers = async () => {
  //   const data = await UserStore.getUsers();
  //   console.log(data);
  // };

  useEffect(() => {
    // getUsers();
  }, []);

  const getCurrentDate = () => {
    moment.locale('es');
    const date = new Date();
    return moment(date).format('dddd, DD MMMM');
  };

  return (
    <ScrollView style={styles.root}>
      <Text>{getCurrentDate()}</Text>
      <View style={styles.cardContainer}>
        <Card
          text="Утренний вес"
          subtext="кг"
          onClick={() => console.log('Click btn')}
        />
        <Card text="Шаги за день" onClick={() => console.log('Click btn')} />
      </View>
    </ScrollView>
  );
};

export default Home;
