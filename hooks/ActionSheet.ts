import { useCallback } from "react";
import CheckboxIcon from "@/components/icons/CheckboxIcon";
import TextLongIcon from "@/components/icons/TextLongIcon";
import TextShortIcon from "@/components/icons/TextShortIcon";
import RadioButtonIcon from "@/components/icons/RadioButtonIcon";

import { useRecoilState } from "recoil";
import { actionSheetState } from "@/recoil/ActionState";
import { ExcludeDescSurveyType } from "@/recoil/QuestionState";

export type surveyTypeProps = {
  [key in ExcludeDescSurveyType]: {
    value: string;
    icon: () => JSX.Element;
  };
};

export const surveyTypeData: surveyTypeProps = {
  short: {
    value: "단답형",
    icon: TextShortIcon,
  },
  long: {
    value: "장문형",
    icon: TextLongIcon,
  },
  radio: {
    value: "객관식 질문",
    icon: RadioButtonIcon,
  },
  checkbox: {
    value: "체크박스",
    icon: CheckboxIcon,
  },
};

export default function ActionSheet() {
  const [showSheet, setShowSheet] = useRecoilState(actionSheetState);

  const handleActionSheet = useCallback(
    (nextState: boolean, lastId: number | null) => {
      setShowSheet({ state: nextState, lastId });
    },
    [setShowSheet]
  );

  return { showSheet, handleActionSheet };
}
