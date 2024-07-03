import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 23,
    marginVertical: 15,
  },
  dirRow: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: theme.icon,
  },
  otherText: {
    color: theme.secondary,
  },
});
