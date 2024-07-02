import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function RadioButtonIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="radiobox-marked"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
