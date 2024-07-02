import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function SectionIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="view-agenda-outline"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
