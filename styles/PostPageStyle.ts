import { StyleSheet } from "react-native";
import { theme } from "./color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollview: {
    minHeight: "100%",
  },
  scrollviewContainer: {
    paddingBottom: 100,
  },
});
