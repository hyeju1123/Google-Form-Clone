import { View } from "react-native";
import QuestionCheckIcon from "./QuestionCheckIcon";
import FocusableTextInput from "./FocusableTextInput";
import { styles } from "@/styles/QuestionCardStyle";

import { useRecoilValue } from "recoil";
import { questionState } from "@/recoil/QuestionState";

export default function QuestionItemList({ _id }: { _id: number }) {
  const { surveyType, items } = useRecoilValue(questionState(_id));
  return (
    <>
      {items.map(({ parentId }, itemId) => (
        <View key={itemId} style={styles.dirRowBox}>
          <QuestionCheckIcon surveyType={surveyType} />
          <FocusableTextInput _id={parentId} itemIdx={itemId} />
        </View>
      ))}
    </>
  );
}
