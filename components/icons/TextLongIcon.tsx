import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function TextLongIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons name="text-long" size={25} color={theme.icon} />
    </IconWrapper>
  );
}
