import Ionicons from "@expo/vector-icons/Ionicons";
import IconWrapper from "../IconWrapper";
import { theme } from "@/styles/color";

export default function SectionIcon() {
  return (
    <IconWrapper>
      <Ionicons name="reorder-two-sharp" size={25} color={theme.text} />
    </IconWrapper>
  );
}
