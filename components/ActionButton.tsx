import { Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/ItemActionPopupStyle";

type ActionButtonProps = {
  onPress: () => void;
  icon: JSX.Element;
  text: string;
};

export default function ActionButton({
  onPress,
  icon,
  text,
}: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {icon}
      <Text style={styles.font}>{text}</Text>
    </TouchableOpacity>
  );
}
