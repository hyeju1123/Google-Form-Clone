import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function MenuDownIcon() {
  return (
    <IconWrapper paddingLeft={50} paddingRight={10}>
      <MaterialCommunityIcons name="menu-down" size={25} color={theme.icon} />
    </IconWrapper>
  );
}
