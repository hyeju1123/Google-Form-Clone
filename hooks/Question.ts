import { useCallback } from "react";
import { styles } from "@/styles/QuestionCardStyle";

import { useRecoilState } from "recoil";
import useCardFocus from "@/hooks/CardFocus";
import {
  TITLE_ID,
  questionState,
  ExcludeDescSurveyType,
} from "@/recoil/QuestionState";

export type QuestionHookProps = {
  _id: number;
  itemIdx: number | null;
};

const setDefaultStyle = ({ _id, itemIdx }: QuestionHookProps) => {
  if (_id !== TITLE_ID) return styles.questionFont;
  return itemIdx === null ? styles.titleFont : styles.descFont;
};

export default function Question({ _id, itemIdx }: QuestionHookProps) {
  const { handleCardFocus } = useCardFocus();
  const [questionVal, setQuestionVal] = useRecoilState(questionState(_id));
  const style = setDefaultStyle({ _id, itemIdx });

  const { items } = questionVal;
  const item = items.find(i => i.itemId === itemIdx);

  const returnValue =
    itemIdx === null
      ? { ...questionVal, style }
      : {
          ...questionVal,
          title: item?.itemTitle,
          focused: item?.focused,
          placeholder: item?.placeholder,
          items: [],
          style,
        };

  /** fn for handling focus */
  const handleFocus = useCallback(
    (_id: number, focused: boolean) => {
      focused && handleCardFocus(_id);
      setQuestionVal(prev => {
        return itemIdx === null
          ? { ...prev, focused }
          : {
              ...prev,
              items: prev.items.map(item =>
                item.itemId === itemIdx ? { ...item, focused } : item
              ),
            };
      });
    },
    [setQuestionVal, handleCardFocus]
  );

  /** fn for handling change */
  const handleChange = useCallback(
    (title: string) => {
      setQuestionVal(prev => {
        return itemIdx === null
          ? { ...prev, title }
          : {
              ...prev,
              items: prev.items.map(item =>
                item.itemId === itemIdx ? { ...item, itemTitle: title } : item
              ),
            };
      });
    },
    [setQuestionVal]
  );

  /** fn for handling survey type */
  const handleSurveyType = useCallback(
    (surveyType: ExcludeDescSurveyType) => {
      setQuestionVal(prev => ({
        ...prev,
        surveyType,
      }));
    },
    [setQuestionVal]
  );

  /** fn for handling adding option */
  const handleAddOption = useCallback(() => {
    setQuestionVal(prev => {
      const { lastItemId } = prev;
      const itemsLen = prev.items.length;
      return {
        ...prev,
        lastItemId: lastItemId + 1,
        items: [
          ...prev.items,
          {
            ...prev.items[itemsLen - 1],
            itemId: lastItemId + 1,
            itemTitle: `옵션 ${itemsLen + 1}`,
          },
        ],
      };
    });
  }, []);

  /** fn for handling deleting option */
  const handleDeleteOption = useCallback((itemId: number) => {
    setQuestionVal(prev => {
      return {
        ...prev,
        items: prev.items.filter(i => i.itemId !== itemId),
      };
    });
  }, []);

  /** fn for handling required option */
  const handleRequired = useCallback(() => {
    setQuestionVal(prev => {
      return {
        ...prev,
        required: !prev.required,
      };
    });
  }, []);

  return {
    handleFocus,
    handleChange,
    handleSurveyType,
    handleAddOption,
    handleDeleteOption,
    handleRequired,
    ...returnValue,
  };
}
