import {Text, View} from 'react-native';
import {styles} from '@/styles/ItemActionPopupStyle';
import MenuDownIcon from './icons/MenuDownIcon';

type ActionButtonProps = {
  text: string;
  icon: JSX.Element;
  padding?: number;
  menuDown?: boolean;
};

export default function ActionButton({
  text,
  icon,
  padding,
  menuDown,
}: ActionButtonProps) {
  return (
    <View style={[{padding}, styles.item]}>
      {icon}
      <Text style={styles.font}>{text}</Text>
      {menuDown && <MenuDownIcon />}
    </View>
  );
}
