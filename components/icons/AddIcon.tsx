import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function AddIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
