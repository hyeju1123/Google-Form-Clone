import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function NonCheckedCheckboxIcon({ size }: { size?: number }) {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={size || 20}
        color={theme.deepShadow}
      />
    </IconWrapper>
  );
}
