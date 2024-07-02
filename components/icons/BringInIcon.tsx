import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function BringInIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="file-send-outline"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
