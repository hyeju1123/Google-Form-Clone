import { TextInput, View } from "react-native";
import { SurveyType } from "@/recoil/QuestionState";
import CheckableItem from "./CheckableItem";

import { memo } from "react";
import { styles } from "@/styles/CheckableItemStyle";

export type PreviewItemProps = {
  parentId: number;
  itemId: number;
  surveyType: SurveyType;
  itemTitle?: string;
};
const PreviewItem = ({
  parentId,
  itemId,
  surveyType,
  itemTitle,
}: PreviewItemProps) => {
  return (
    <View>
      {surveyType === "long" || surveyType === "short" ? (
        <TextInput style={styles.textInput} multiline={surveyType === "long"} />
      ) : (
        <CheckableItem
          parentId={parentId}
          itemId={itemId}
          surveyType={surveyType}
          itemTitle={itemTitle}
        />
      )}
    </View>
  );
};

export default memo(PreviewItem);
