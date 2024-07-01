import Ionicons from "@expo/vector-icons/Ionicons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function BringInIcon() {
  return (
    <IconWrapper>
      <Ionicons name="enter-outline" size={25} color={theme.text} />
    </IconWrapper>
  );
}
