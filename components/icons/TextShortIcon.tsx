import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function TextShortIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons name="text-short" size={25} color={theme.icon} />
    </IconWrapper>
  );
}
