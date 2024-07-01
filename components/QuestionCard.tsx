import Card from "./Card";
import QuestionItemList from "./QuestionItemList";
import FocusableTextInput from "./FocusableTextInput";

import { useRecoilValue } from "recoil";
import { questionState } from "@/recoil/QuestionState";
import { memo } from "react";

type QuestionCardProps = {
  _id: number;
};

const QuestionCard = ({ _id }: QuestionCardProps) => {
  const { items } = useRecoilValue(questionState(_id));

  return (
    <Card _id={_id}>
      <FocusableTextInput _id={_id} itemIdx={null} />
      <QuestionItemList items={items} />
    </Card>
  );
};

export default memo(QuestionCard);
