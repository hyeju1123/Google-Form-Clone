import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function CheckboxIcon({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="checkbox-outline"
        size={size || 25}
        color={color || theme.icon}
      />
    </IconWrapper>
  );
}
