import { Text, View } from "react-native";
import { styles } from "@/styles/PreviewTitleStyle";

type PreviewTitleProps = {
  isMain: boolean;
  title: string;
  required: boolean;
};

export default function PreviewTitle({
  isMain,
  title,
  required,
}: PreviewTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={isMain && styles.mainTitle}>{title}</Text>
      <Text style={styles.asterik}>{required && "*"}</Text>
    </View>
  );
}
