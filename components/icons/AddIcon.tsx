import Ionicons from "@expo/vector-icons/Ionicons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function AddIcon() {
  return (
    <IconWrapper>
      <Ionicons name="add-circle-outline" size={25} color={theme.text} />
    </IconWrapper>
  );
}
