import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  titleRoof: {
    marginHorizontal: 20,
    height: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: theme.primary,
  },
  container: {
    backgroundColor: theme.card,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
