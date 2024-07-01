import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function TextIcon() {
  return (
    <IconWrapper>
      <MaterialIcons name="text-fields" size={25} color={theme.text} />
    </IconWrapper>
  );
}
