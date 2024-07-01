import { styles } from "@/styles/IconWrapperStyle";
import { PropsWithChildren } from "react";
import { View } from "react-native";

type IconWrapperProps = PropsWithChildren & {
  padding?: number;
};

export default function IconWrapper({ children, padding }: IconWrapperProps) {
  return <View style={[styles.container, { padding }]}>{children}</View>;
}
