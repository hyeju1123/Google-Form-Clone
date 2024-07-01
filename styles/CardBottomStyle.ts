import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "auto",
    borderTopWidth: 1,
    borderColor: theme.shadow,
    marginTop: 10,
    padding: 10,
  },
});
