import {
  Platform,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import ActionSheet from "@/components/ActionSheet";
import QuestionCard from "@/components/QuestionCard";
import BottomActionTab from "@/components/BottomActionTab";
import ItemActionPopup from "@/components/ItemActionPopup";
import { styles } from "@/styles/PostPageStyle";

import usePopup from "@/hooks/Popup";
import useQuestionList from "@/hooks/QuestionList";

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
        <ActionSheet />
        <ItemActionPopup showPopup={state} />
        <BottomActionTab />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
