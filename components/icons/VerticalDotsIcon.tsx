import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function VerticalDotsIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="dots-vertical"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
