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
  questionBg: {
    backgroundColor: theme.shadow,
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
    flexGrow: 1,
    borderBottomWidth: 2,
    borderColor: theme.primary,
  },
  dirRowBox: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});
