import { ItemProps, TITLE_ID } from "@/recoil/QuestionState";
import FocusableTextInput from "./FocusableTextInput";
import { styles } from "@/styles/QuestionCardStyle";

type QuestionItemListProps = {
  items: ItemProps[];
};

export default function QuestionItemList({ items }: QuestionItemListProps) {
  return (
    <>
      {items.map(({ parentId, itemTitle, placeholder, focused }, itemId) => (
        <FocusableTextInput
          key={itemId}
          _id={parentId}
          itemId={itemId}
          title={itemTitle}
          focused={focused}
          placeholder={placeholder}
          style={parentId === TITLE_ID ? styles.descFont : styles.questionFont}
        />
      ))}
    </>
  );
}
