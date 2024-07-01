import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95%",
    height: 50,
    alignSelf: "center",
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.shadow,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
