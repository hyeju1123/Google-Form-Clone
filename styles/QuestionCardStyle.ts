import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  titleFont: {
    fontSize: 25,
    paddingVertical: 5,
  },
  descFont: {
    color: theme.textSecondary,
    fontSize: 15,
    paddingTop: 10,
  },
  questionFont: {
    fontSize: 16,
    padding: 15,
  },
  underline: {
    flexGrow: 1,
    borderBottomWidth: 2,
    borderColor: theme.shadow,
  },
  focusedUnderline: {
    borderColor: theme.primary,
  },
  dirRowBox: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
