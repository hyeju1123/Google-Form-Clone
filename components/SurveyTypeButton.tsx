import { createElement, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import ActionButton from "./ActionButton";
import GalleryIcon from "./icons/GalleryIcon";
import { styles } from "@/styles/SurveyTypeButtonStyle";
import {
  ExcludeDescSurveyType,
  TITLE_ID,
  questionState,
} from "@/recoil/QuestionState";
import { useRecoilValue } from "recoil";
import useCardFocus from "@/hooks/CardFocus";
import useActionSheet, { surveyTypeData } from "@/hooks/ActionSheet";
import MenuDownIcon from "./icons/MenuDownIcon";

type SurveyTypeButtonProps = {
  _id: number;
};

export default function SurveyTypeButton({ _id }: SurveyTypeButtonProps) {
  const { focusedCard } = useCardFocus();
  const { handleActionSheet } = useActionSheet();
  const { surveyType } = useRecoilValue(questionState(_id));
  const surveyTypeInfo = surveyTypeData[surveyType as ExcludeDescSurveyType];

  const handleShow = useCallback(() => {
    return _id === TITLE_ID || !(_id === focusedCard) ? "none" : "flex";
  }, [focusedCard]);

  return (
    <View style={[styles.container, { display: handleShow() }]}>
      <GalleryIcon />
      <TouchableOpacity
        style={styles.typeButton}
        onPress={() => handleActionSheet(true, _id)}
      >
        {surveyTypeInfo && (
          <ActionButton
            padding={10}
            text={surveyTypeInfo.value}
            icon={createElement(surveyTypeInfo.icon)}
            onPress={() => {}}
          />
        )}
        <MenuDownIcon />
      </TouchableOpacity>
    </View>
  );
}
