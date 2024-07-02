import { PropsWithChildren } from "react";
import { View } from "react-native";
import { styles } from "@/styles/IconWrapperStyle";

type IconWrapperProps = PropsWithChildren & {
  paddingLeft?: number;
  paddingRight?: number;
  padding?: number;
};

export default function IconWrapper({
  children,
  padding,
  paddingLeft,
  paddingRight,
}: IconWrapperProps) {
  return (
    <View style={[styles.container, { padding, paddingLeft, paddingRight }]}>
      {children}
    </View>
  );
}
