import { TouchableOpacity, View } from "react-native";
import QuestionCheckIcon from "./QuestionCheckIcon";
import TextInputSkeleton from "./TextInputSkeleton";
import FocusableTextInput from "./FocusableTextInput";
import AddedOptionsWrapper from "./AddedOptionsWrapper";
import { styles } from "@/styles/QuestionCardStyle";

import useQuestion from "@/hooks/Question";
import { SurveyType } from "@/recoil/QuestionState";
import CloseIcon from "./icons/CloseIcon";

export default function QuestionItemList({ _id }: { _id: number }) {
  const { surveyType, items, handleDeleteOption } = useQuestion({
    _id,
    itemIdx: null,
  });

  return (
    <>
      {surveyType === "long" || surveyType === "short" ? (
        <TextInputSkeleton surveyType={surveyType} />
      ) : (
        <>
          {items.map(({ parentId, itemId }) => (
            <View key={itemId} style={styles.dirRowBox}>
              <QuestionCheckIcon surveyType={surveyType as SurveyType} />
              <FocusableTextInput _id={parentId} itemIdx={itemId} />
              {items.length > 1 && (
                <TouchableOpacity onPress={() => handleDeleteOption(itemId)}>
                  <CloseIcon />
                </TouchableOpacity>
              )}
            </View>
          ))}
          <AddedOptionsWrapper _id={_id} />
        </>
      )}
    </>
  );
}
