import { memo, useCallback } from "react";
import { TextInput } from "react-native";

import useQuestion from "@/hooks/Question";
import { TITLE_ID } from "@/recoil/QuestionState";
import { styles } from "@/styles/QuestionCardStyle";

type FocusableTextInputProps = {
  _id: number;
  itemIdx: number | null;
};

const FocusableTextInput = ({ _id, itemIdx }: FocusableTextInputProps) => {
  const { title, focused, placeholder, handleChange, handleFocus, style } =
    useQuestion({ _id, itemIdx });

  const handleStyle = useCallback(() => {
    const underline = focused && styles.focusedUnderline;
    const questionBackground =
      focused && itemIdx === null && _id !== TITLE_ID && styles.questionBg;
    return [style, underline, questionBackground];
  }, [focused]);

  return (
    <TextInput
      value={title}
      placeholder={placeholder}
      onChangeText={handleChange}
      onFocus={() => handleFocus(_id, true)}
      onBlur={() => handleFocus(_id, false)}
      style={handleStyle()}
    />
  );
};

export default memo(FocusableTextInput);
