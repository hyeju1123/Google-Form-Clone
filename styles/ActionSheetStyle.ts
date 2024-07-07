import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    zIndex: 20,
    position: "absolute",
    width: "100%",
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
