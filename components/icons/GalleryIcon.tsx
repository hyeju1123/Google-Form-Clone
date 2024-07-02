import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function GalleryIcon() {
  return (
    <IconWrapper>
      <MaterialCommunityIcons
        name="image-outline"
        size={25}
        color={theme.icon}
      />
    </IconWrapper>
  );
}
