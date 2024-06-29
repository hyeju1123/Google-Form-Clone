import QuestionCard from "@/components/QuestionCard";
import { useRecoilValue } from "recoil";
import { questionsState } from "@/recoil/QuestionState";

export default function PostPage() {
  const questions = useRecoilValue(questionsState);
  return (
    <>
      {questions.map(({ _id }) => (
        <QuestionCard key={_id} _id={_id} />
      ))}
    </>
  );
}
