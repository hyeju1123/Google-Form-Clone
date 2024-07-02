import Foundation from "@expo/vector-icons/Foundation";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function DeleteIcon() {
  return (
    <IconWrapper padding={3}>
      <Foundation name="trash" size={20} color={theme.icon} />
    </IconWrapper>
  );
}
