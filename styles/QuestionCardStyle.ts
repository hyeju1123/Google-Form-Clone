import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  titleFont: {
    fontSize: 25,
    paddingVertical: 5,
  },
  descFont: {
    color: theme.textSecondary,
    fontSize: 15,
    paddingTop: 10,
  },
  questionFont: {
    fontSize: 16,
    padding: 15,
  },
});
