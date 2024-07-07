import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemFont: {
    paddingLeft: 10,
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: theme.deepShadow,
    paddingVertical: 10,
  },
});
