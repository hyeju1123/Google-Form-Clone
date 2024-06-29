import { TITLE_ID, questionState } from "@/recoil/QuestionState";
import { styles } from "@/styles/QuestionCardStyle";
import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

export type QuestionHookProps = {
  _id: number;
  itemIdx: number | null;
};

const setDefaultStyle = ({ _id, itemIdx }: QuestionHookProps) => {
  if (_id !== TITLE_ID) return styles.questionFont;
  return itemIdx === null ? styles.titleFont : styles.descFont;
};

export default function Question({ _id, itemIdx }: QuestionHookProps) {
  const [questionVal, setQuestionVal] = useRecoilState(questionState(_id));
  const { title, focused, placeholder, items } = questionVal;
  const style = setDefaultStyle({ _id, itemIdx });
  const returnValue =
    itemIdx === null
      ? { title, focused, placeholder, style }
      : {
          title: items[itemIdx].itemTitle,
          focused: items[itemIdx].focused,
          placeholder: items[itemIdx].placeholder,
          style,
        };

  /** fn for handling focus */
  const handleFocus = useCallback(
    (focused: boolean) => {
      setQuestionVal(prev => {
        return itemIdx === null
          ? { ...prev, focused }
          : {
              ...prev,
              items: prev.items.map((item, idx) =>
                idx === itemIdx ? { ...item, focused } : item
              ),
            };
      });
    },
    [setQuestionVal]
  );

  /** fn for handling change */
  const handleChange = useCallback(
    (title: string) => {
      setQuestionVal(prev => {
        return itemIdx === null
          ? { ...prev, title }
          : {
              ...prev,
              items: prev.items.map((item, idx) =>
                idx === itemIdx ? { ...item, itemTitle: title } : item
              ),
            };
      });
    },
    [setQuestionVal]
  );

  return { handleFocus, handleChange, ...returnValue };
}
