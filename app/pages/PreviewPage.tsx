import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { styles } from "@/styles/PostPageStyle";

import useAnswer from "@/hooks/Answer";
import useQuestionList from "@/hooks/QuestionList";
import PreviewCard from "@/components/PreviewCard";
import { useEffect } from "react";

export default function PreviewPage() {
  const { resetAnswers } = useAnswer();
  const { questionList } = useQuestionList();

  useEffect(() => {
    return () => {
      resetAnswers();
    };
  }, [resetAnswers]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollviewContainer}
          onStartShouldSetResponder={() => true}
        >
          {questionList.map(({ _id }, idx) => (
            <PreviewCard key={_id} _id={_id} />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
