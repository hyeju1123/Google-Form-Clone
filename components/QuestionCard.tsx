import { memo } from "react";
import Card from "./Card";
import SurveyTypeButton from "./SurveyTypeButton";
import QuestionItemList from "./QuestionItemList";
import FocusableTextInput from "./FocusableTextInput";

type QuestionCardProps = {
  _id: number;
};

const QuestionCard = ({ _id }: QuestionCardProps) => {
  return (
    <Card _id={_id}>
      <FocusableTextInput _id={_id} itemIdx={null} />
      <SurveyTypeButton _id={_id} />
      <QuestionItemList _id={_id} />
    </Card>
  );
};

export default memo(QuestionCard);
