import { Dimensions, StyleSheet } from "react-native";
import { theme } from "./color";

const width = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.card,
    borderRadius: 5,
    position: "absolute",
    zIndex: 10,
    right: 0,
    bottom: 0,
    width: (width * 2) / 3,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  font: {
    marginLeft: 20,
  },
});
