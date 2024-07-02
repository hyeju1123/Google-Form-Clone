import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function CheckboxIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="checkbox-outline"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
