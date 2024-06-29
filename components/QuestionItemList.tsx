import { ItemProps } from "@/recoil/QuestionState";
import { View } from "react-native";
import QuestionCheckIcon from "./QuestionCheckIcon";
import FocusableTextInput from "./FocusableTextInput";
import { styles } from "@/styles/QuestionCardStyle";

type QuestionItemListProps = {
  items: ItemProps[];
};

export default function QuestionItemList({ items }: QuestionItemListProps) {
  return (
    <>
      {items.map(({ parentId, surveyType }, itemId) => (
        <View key={itemId} style={styles.dirRowBox}>
          <QuestionCheckIcon surveyType={surveyType} />
          <FocusableTextInput _id={parentId} itemIdx={itemId} />
        </View>
      ))}
    </>
  );
}
