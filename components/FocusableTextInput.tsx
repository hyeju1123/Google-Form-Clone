import { memo, useEffect } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useSetRecoilState } from "recoil";
import { questionState } from "@/recoil/QuestionState";
import { theme } from "@/styles/color";

interface FocusableTextInputProps extends TextInputProps {
  _id: number;
  title: string;
  focused: boolean;
  itemId?: number;
}

const FocusableTextInput = ({
  _id,
  title,
  focused,
  itemId,
  style,
  ...props
}: FocusableTextInputProps) => {
  const setQuestion = useSetRecoilState(questionState(_id));

  const handleFocus = (focused: boolean) => {
    setQuestion(prev => {
      return itemId === undefined
        ? { ...prev, focused }
        : {
            ...prev,
            items: prev.items.map((item, idx) =>
              idx === itemId ? { ...item, focused } : item
            ),
          };
    });
  };

  const handleChange = (title: string) => {
    setQuestion(prev => {
      return itemId === undefined
        ? { ...prev, title }
        : {
            ...prev,
            items: prev.items.map((item, idx) =>
              idx === itemId ? { ...item, itemTitle: title } : item
            ),
          };
    });
  };

  return (
    <TextInput
      value={title}
      style={[style, styles.underline, focused && styles.focusedUnderline]}
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      onChangeText={handleChange}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  underline: {
    borderBottomWidth: 2,
    borderColor: theme.shadow,
  },
  focusedUnderline: {
    borderColor: theme.primary,
  },
});

export default memo(FocusableTextInput);
