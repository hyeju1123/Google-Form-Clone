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
    borderRadius: 7,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  focusedBar: {
    width: 5,
    height: "auto",
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
});
