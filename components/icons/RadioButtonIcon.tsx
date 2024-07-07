import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function RadioButtonIcon({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="radiobox-marked"
        size={size || 25}
        color={color || theme.icon}
      />
    </IconWrapper>
  );
}
