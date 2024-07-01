import { styles } from "@/styles/BottomActionTabStyle";
import { TouchableOpacity, View } from "react-native";
import useQuestionList from "@/hooks/QuestionList";
import AddIcon from "./icons/AddIcon";
import BringInIcon from "./icons/BringInIcon";
import TextIcon from "./icons/TextIcon";
import GalleryIcon from "./icons/GalleryIcon";
import VideoIcon from "./icons/VideoIcon";
import SectionIcon from "./icons/SectionIcon";

export default function BottomActionTab() {
  const { addQuestion } = useQuestionList();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => addQuestion()}>
        <AddIcon />
      </TouchableOpacity>

      <BringInIcon />
      <TextIcon />
      <GalleryIcon />
      <VideoIcon />
      <SectionIcon />
    </View>
  );
}
