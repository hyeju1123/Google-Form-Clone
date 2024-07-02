import Foundation from "@expo/vector-icons/Foundation";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function VideoIcon() {
  return (
    <IconWrapper>
      <Foundation name="play-video" size={25} color={theme.icon} />
    </IconWrapper>
  );
}
