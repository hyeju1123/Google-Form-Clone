import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function CloseIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons name="close" size={25} color={theme.icon} />
    </IconWrapper>
  );
}
