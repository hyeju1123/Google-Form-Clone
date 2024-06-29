import Card from "./Card";
import QuestionItemList from "./QuestionItemList";
import FocusableTextInput from "./FocusableTextInput";

import { useRecoilValue } from "recoil";
import { TITLE_ID, questionState } from "@/recoil/QuestionState";

type QuestionCardProps = {
  _id: number;
};

export default function QuestionCard({ _id }: QuestionCardProps) {
  const { items } = useRecoilValue(questionState(_id));

  return (
    <Card title={_id === TITLE_ID}>
      <FocusableTextInput _id={_id} itemIdx={null} />
      <QuestionItemList items={items} />
    </Card>
  );
}
