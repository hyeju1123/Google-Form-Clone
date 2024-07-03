import { createElement, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import ActionButton from "./ActionButton";
import { styles } from "@/styles/ModalStyle";

import useQuestion from "@/hooks/Question";
import useActionSheet from "@/hooks/ActionSheet";
import { surveyTypeData } from "@/hooks/ActionSheet";
import { ExcludeDescSurveyType } from "@/recoil/QuestionState";
import { ActionProps } from "@/recoil/ActionState";

export default function Modal({
  showModal: { state, lastId },
}: {
  showModal: ActionProps;
}) {
  const { handleActionSheet } = useActionSheet();
  const { handleSurveyType } = useQuestion({ _id: lastId || 0, itemIdx: null });
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [slideAnim, state]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [300, 0],
              }),
            },
          ],
        },
      ]}
    >
      {Object.keys(surveyTypeData).map(key => {
        const { value, icon } = surveyTypeData[key as ExcludeDescSurveyType];
        return (
          <ActionButton
            key={value}
            text={value}
            padding={20}
            icon={createElement(icon)}
            onPress={() => {
              handleSurveyType(key as ExcludeDescSurveyType);
              handleActionSheet(false, null);
            }}
          />
        );
      })}
    </Animated.View>
  );
}
