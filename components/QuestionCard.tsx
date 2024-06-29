import Card from "./Card";
import FocusableTextInput from "./FocusableTextInput";

import { useRecoilValue } from "recoil";
import { TITLE_ID, questionState } from "@/recoil/QuestionState";
import QuestionItemList from "./QuestionItemList";
import { styles } from "@/styles/QuestionCardStyle";

type QuestionCardProps = {
  _id: number;
};

export default function QuestionCard({ _id }: QuestionCardProps) {
  const question = useRecoilValue(questionState(_id));
  const { title, placeholder, items, focused } = question;

  return (
    <Card title={_id === TITLE_ID}>
      <FocusableTextInput
        _id={_id}
        title={title}
        focused={focused}
        placeholder={placeholder}
        style={_id === TITLE_ID ? styles.titleFont : styles.questionFont}
      />
      <QuestionItemList items={items} />
    </Card>
  );
}
