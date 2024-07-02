import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function CopyIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="content-copy"
        size={20}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
