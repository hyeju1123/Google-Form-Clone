import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostPage from "./pages/PostPage";
import PreviewPage from "./pages/PreviewPage";

export type RootStackParamList = {
  Post: undefined;
  Preview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Post" component={PostPage} />
        <Stack.Screen name="Preview" component={PreviewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
