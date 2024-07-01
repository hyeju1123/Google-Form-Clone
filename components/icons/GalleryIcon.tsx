import AntDesign from "@expo/vector-icons/AntDesign";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function GalleryIcon() {
  return (
    <IconWrapper>
      <AntDesign name="picture" size={25} color={theme.text} />
    </IconWrapper>
  );
}
