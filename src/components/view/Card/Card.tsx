// eslint-disable-next-line import/no-extraneous-dependencies
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  View,
  Text,
  Button,
  DimensionValue,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import { styles } from './styles';

interface ICard {
  text: string;
  subtext?: string;
  width?: DimensionValue;
  onClick: VoidFunction;
}

export const Card = ({ text, subtext, width, onClick }: ICard) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={[{ width: width || windowWidth / 2 - 15 }, styles.root]}>
      <View style={styles.content}>
        <View style={styles.icon}>
          <FontAwesome6 name="weight-scale" size={16} color="#0C8C6D" />
        </View>
        <Text>{text}</Text>
        <Text>{subtext || ''}</Text>
      </View>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>Изменить</Text>
      </Pressable>
    </View>
  );
};
