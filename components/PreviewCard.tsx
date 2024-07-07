import { QuestionProps, TITLE_ID } from "@/recoil/QuestionState";
import { styles } from "@/styles/PreviewCardStyle";
import { Text, View } from "react-native";
import PreviewTitle from "./PreviewTitle";
import useAnswer from "@/hooks/Answer";
import useQuestion from "@/hooks/Question";
import { memo, useEffect } from "react";
import PreviewItem from "./PreviewItem";

type PreviewCardProps = {
  _id: number;
};

const PreviewCard = ({ _id }: PreviewCardProps) => {
  const { addAnswers } = useAnswer();
  const { title, required, items, surveyType } = useQuestion({
    _id,
    itemIdx: null,
  });
  const isMain = _id === TITLE_ID;

  useEffect(() => {
    addAnswers({
      _id: _id,
      items: Array.from({ length: items.length }, () => false),
    });
  }, [items, addAnswers]);

  return (
    <>
      {isMain && <View style={styles.titleRoof} />}
      <View style={styles.container}>
        <PreviewTitle title={title} required={required} isMain={isMain} />
        {items.map(({ itemTitle, itemId }) => (
          <PreviewItem
            key={itemId}
            parentId={_id}
            itemId={itemId}
            surveyType={surveyType}
            itemTitle={itemTitle}
          />
        ))}
      </View>
    </>
  );
};

export default memo(PreviewCard);
