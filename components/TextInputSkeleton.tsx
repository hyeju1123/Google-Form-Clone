import { styles } from "@/styles/TextInputSkeletonStyle";
import { Text, View } from "react-native";

export default function TextInputSkeleton({
  surveyType,
}: {
  surveyType: "long" | "short";
}) {
  const textValue = surveyType === "long" ? "장문형" : "단답형";
  const width = surveyType === "long" ? "80%" : "40%";
  return (
    <View style={[styles.container, { width }]}>
      <Text>{textValue} 텍스트</Text>
    </View>
  );
}
