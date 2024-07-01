import QuestionCard from "@/components/QuestionCard";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import usePopup from "@/hooks/Popup";
import useQuestionList from "@/hooks/QuestionList";
import BottomActionTab from "@/components/BottomActionTab";
import { styles } from "@/styles/PostPageStyle";
import ItemActionPopup from "@/components/ItemActionPopup";

export default function PostPage() {
  const { questionList } = useQuestionList();
  const {
    showPopup: { state },
    handlePopup,
  } = usePopup();

  return (
    <TouchableWithoutFeedback onPress={() => handlePopup(false, null)}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollviewContainer}
            onStartShouldSetResponder={() => true}
          >
            {questionList.map(({ _id }) => (
              <QuestionCard key={_id} _id={_id} />
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
        <ItemActionPopup showPopup={state} />
        <BottomActionTab />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
