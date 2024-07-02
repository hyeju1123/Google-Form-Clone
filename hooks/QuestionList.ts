import { useCallback } from "react";
import {
  EmptyQuestion,
  ExcludeDescSurveyType,
  QuestionProps,
  indexState,
  questionsState,
} from "@/recoil/QuestionState";
import { useRecoilState } from "recoil";
import useCardFocus from "@/hooks/CardFocus";

export default function QuestionList() {
  const { handleCardFocus } = useCardFocus();
  const [lastIdx, setLastIdx] = useRecoilState(indexState);
  const [questionList, setQuestionList] = useRecoilState(questionsState);

  const addQuestion = useCallback(
    (copiedQuestion?: QuestionProps) => {
      const baseQuestion = copiedQuestion || EmptyQuestion;
      const newQuestion: QuestionProps = {
        ...baseQuestion,
        _id: lastIdx,
        focused: true,
        items: baseQuestion.items.map(item => ({
          ...item,
          parentId: lastIdx,
          focused: false,
        })),
      };
      setLastIdx(prev => prev + 1);
      setQuestionList(prev => [...prev, newQuestion]);
      handleCardFocus(lastIdx);
    },
    [lastIdx, setLastIdx, setQuestionList]
  );

  const removeQuestion = useCallback(
    (_id: number) => {
      setQuestionList(prev => prev.filter(q => q._id !== _id));
      handleCardFocus(null);
    },
    [setQuestionList]
  );

  const updateSurveyType = useCallback(
    (_id: number, surveyType: ExcludeDescSurveyType) => {
      setQuestionList(prev =>
        prev.map(q => (q._id === _id ? { ...q, surveyType } : q))
      );
    },
    [setQuestionList]
  );

  return { questionList, addQuestion, removeQuestion, updateSurveyType };
}
