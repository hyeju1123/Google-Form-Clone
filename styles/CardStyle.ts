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
  focusedWrapper: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.card,
  },
  focusedBar: {
    width: 5,
    height: "auto",
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
});
