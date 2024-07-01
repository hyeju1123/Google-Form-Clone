import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
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
