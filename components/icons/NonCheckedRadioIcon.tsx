import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function NonCheckedRadioIcon({ size }: { size?: number }) {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="checkbox-blank-circle-outline"
        size={size || 20}
        color={theme.deepShadow}
      />
    </IconWrapper>
  );
}
