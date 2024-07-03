import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  titleFont: {
    flexGrow: 1,
    fontSize: 25,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  descFont: {
    flexGrow: 1,
    color: theme.textSecondary,
    fontSize: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  questionBg: {
    backgroundColor: theme.shadow,
    paddingHorizontal: 5,
  },
  questionFont: {
    flexGrow: 1,
    fontSize: 16,
    paddingVertical: 15,
    marginHorizontal: 10,
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
    marginHorizontal: 10,
  },
  dirRowBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  closeButton: {},
  asterisk: {
    position: "absolute",
    color: theme.required,
  },
});
