import {
  EmptyQuestion,
  QuestionProps,
  indexState,
  questionsState,
} from "@/recoil/QuestionState";

import { useCallback } from "react";
import { useRecoilState } from "recoil";

export default function QuestionList() {
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
    },
    [lastIdx, setLastIdx, setQuestionList]
  );

  const removeQuestion = useCallback(
    (_id: number) => {
      setQuestionList(prev => prev.filter(q => q._id !== _id));
    },
    [setQuestionList]
  );

  return { questionList, addQuestion, removeQuestion };
}
