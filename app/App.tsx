import { SafeAreaView, StyleSheet, Text } from "react-native";
import { theme } from "@/styles/color";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PostPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
