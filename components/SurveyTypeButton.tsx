import { createElement, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import ActionButton from "./ActionButton";
import GalleryIcon from "./icons/GalleryIcon";
import MenuDownIcon from "./icons/MenuDownIcon";
import { styles } from "@/styles/SurveyTypeButtonStyle";

import useQuestion from "@/hooks/Question";
import useCardFocus from "@/hooks/CardFocus";
import useActionSheet, { surveyTypeData } from "@/hooks/ActionSheet";
import { TITLE_ID, ExcludeDescSurveyType } from "@/recoil/QuestionState";

type SurveyTypeButtonProps = {
  _id: number;
};

export default function SurveyTypeButton({ _id }: SurveyTypeButtonProps) {
  const { focusedCard } = useCardFocus();
  const { handleActionSheet } = useActionSheet();
  const { surveyType } = useQuestion({ _id, itemIdx: null });
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
