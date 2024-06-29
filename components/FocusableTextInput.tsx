import { memo } from "react";
import { TextInput } from "react-native";
import { styles } from "@/styles/QuestionCardStyle";
import useQuestion from "@/hooks/Question";

type FocusableTextInputProps = {
  _id: number;
  itemIdx: number | null;
};

const FocusableTextInput = ({ _id, itemIdx }: FocusableTextInputProps) => {
  const { title, focused, placeholder, handleChange, handleFocus, style } =
    useQuestion({ _id, itemIdx });

  return (
    <TextInput
      value={title}
      placeholder={placeholder}
      onChangeText={handleChange}
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      style={[style, styles.underline, focused && styles.focusedUnderline]}
    />
  );
};

export default memo(FocusableTextInput);
