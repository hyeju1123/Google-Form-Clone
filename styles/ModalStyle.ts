import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.card,
    position: "absolute",
    bottom: 0,
    zIndex: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  text: {
    padding: 15,
  },
});
