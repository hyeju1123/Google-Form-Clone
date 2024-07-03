import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  toggleBg: {
    width: 30,
    height: 15,
    borderRadius: 20,
    backgroundColor: theme.deepShadow,
    marginHorizontal: 10,
  },
  toggleCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: theme.card,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
