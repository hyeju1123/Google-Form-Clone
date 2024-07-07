import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  mainTitle: {
    fontSize: 25,
  },
  asterik: {
    color: theme.required,
    marginLeft: 3,
  },
});
