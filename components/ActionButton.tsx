import { Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/ItemActionPopupStyle";

type ActionButtonProps = {
  text: string;
  icon: JSX.Element;
  padding?: number;
  onPress: () => void;
};

export default function ActionButton({
  text,
  icon,
  padding,
  onPress,
}: ActionButtonProps) {
  return (
    <TouchableOpacity style={[{ padding }, styles.item]} onPress={onPress}>
      {icon}
      <Text style={styles.font}>{text}</Text>
    </TouchableOpacity>
  );
}
