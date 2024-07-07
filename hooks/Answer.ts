import { useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { AnswerProps, answersState } from "@/recoil/AnswerState";

export default function Answer() {
  const resetAnswers = useResetRecoilState(answersState);
  const [answers, setAnswers] = useRecoilState(answersState);

  const handleAnswers = useCallback(
    (defaultAnswer: AnswerProps[]) => {
      setAnswers(defaultAnswer);
    },
    [setAnswers]
  );

  const addAnswers = useCallback(
    (initialValue: AnswerProps) => {
      setAnswers(prev => [...prev, initialValue]);
    },
    [setAnswers]
  );

  return { answers, handleAnswers, addAnswers, resetAnswers };
}
