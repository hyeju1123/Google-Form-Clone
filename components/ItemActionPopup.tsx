import { questionState } from "@/recoil/QuestionState";
import { styles } from "@/styles/ItemActionPopupStyle";
import { View } from "react-native";
import { useRecoilValue } from "recoil";

import usePopup from "@/hooks/Popup";
import useCardFocus from "@/hooks/CardFocus";
import useQuestionList from "@/hooks/QuestionList";

import ActionButton from "./ActionButton";
import DeleteIcon from "./icons/DeleteIcon";
import CopyIcon from "./icons/CopyIcon";

type ItemActionPopupProps = {
  showPopup: boolean;
};

export default function ItemActionPopup({ showPopup }: ItemActionPopupProps) {
  const {
    showPopup: { lastId },
    handlePopup,
  } = usePopup();
  const { addQuestion, removeQuestion } = useQuestionList();
  const copiedQuestion = useRecoilValue(questionState(lastId || 0));

  const handleAddQuestion = () => {
    addQuestion(copiedQuestion);
    handlePopup(false, null);
  };

  const handleRemoveQuestion = () => {
    removeQuestion(lastId || 0);
    handlePopup(false, null);
  };

  return (
    <View style={[styles.container, { display: showPopup ? "flex" : "none" }]}>
      <ActionButton
        onPress={handleAddQuestion}
        icon={<CopyIcon />}
        text="항목 복제"
      />
      <ActionButton
        onPress={handleRemoveQuestion}
        icon={<DeleteIcon />}
        text="삭제"
      />
    </View>
  );
}
