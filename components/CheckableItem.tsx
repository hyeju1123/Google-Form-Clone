import { Text, TouchableOpacity } from "react-native";
import { styles } from "@/styles/CheckableItemStyle";
import RadioButtonIcon from "./icons/RadioButtonIcon";
import CheckboxIcon from "./icons/CheckboxIcon";
import { answerState } from "@/recoil/AnswerState";
import { useRecoilState, useResetRecoilState } from "recoil";
import NonCheckedRadioIcon from "./icons/NonCheckedRadioIcon";
import NonCheckedCheckboxIcon from "./icons/NonCheckedCheckboxIcon";
import { theme } from "@/styles/color";
import { useEffect } from "react";

type CheckableItemProps = {
  itemTitle?: string;
  surveyType: string;
  parentId: number;
  itemId: number;
};

type UpdatedAnswer = {
  items: boolean[];
  itemId: number;
  isChecked: boolean;
  surveyType: string;
};

const getCheckableIcon = (surveyType: string, checked: boolean) => {
  if (surveyType === "radio") {
    return checked ? (
      <RadioButtonIcon size={20} color={theme.primary} />
    ) : (
      <NonCheckedRadioIcon size={20} />
    );
  }
  if (surveyType === "checkbox") {
    return checked ? (
      <CheckboxIcon size={20} color={theme.primary} />
    ) : (
      <NonCheckedCheckboxIcon size={20} />
    );
  }
};

const updateAnswers = ({
  items,
  itemId,
  isChecked,
  surveyType,
}: UpdatedAnswer) => {
  return items.map((answer, id) => {
    if (surveyType === "radio") {
      return id === itemId ? isChecked : false;
    }
    if (surveyType === "checkbox") {
      return id === itemId ? isChecked : answer;
    }
    return false;
  });
};

export default function CheckableItem({
  parentId,
  itemId,
  itemTitle,
  surveyType,
}: CheckableItemProps) {
  const resetAnswers = useResetRecoilState(answerState(parentId));
  const [answers, setAnswers] = useRecoilState(answerState(parentId));
  const { _id, items } = answers;

  const handlePress = () => {
    const isChecked = !items[itemId];
    const newAnswers = updateAnswers({
      items,
      itemId,
      isChecked,
      surveyType,
    });
    setAnswers({ _id, items: newAnswers });
  };

  useEffect(() => {
    return () => {
      resetAnswers();
    };
  }, [resetAnswers]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {getCheckableIcon(surveyType, items[itemId])}
      <Text style={styles.itemFont}>{itemTitle}</Text>
    </TouchableOpacity>
  );
}
