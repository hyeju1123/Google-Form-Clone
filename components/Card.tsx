import { theme } from "@/styles/color";
import { PropsWithChildren, ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = PropsWithChildren & {
  title?: boolean;
};

export default function Card({ children, title }: Props) {
  return (
    <>
      {title && <View style={styles.titleRoof} />}
      <View style={styles.container}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  titleRoof: {
    width: "auto",
    height: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: theme.primary,
  },
  container: {
    width: "auto",
    padding: 20,
    marginBottom: 12,
    backgroundColor: theme.card,
  },
});
