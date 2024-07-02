import { styles } from "@/styles/CardStyle";
import { View } from "react-native";
import useCardFocus from "@/hooks/CardFocus";
import { useMemo } from "react";
import { TITLE_ID } from "@/recoil/QuestionState";

type CardDecoProps = {
  isRoof?: boolean;
  _id: number;
};

export default function CardDeco({ isRoof, _id }: CardDecoProps) {
  const { focusedCard } = useCardFocus();
  const matchingId = useMemo(
    () => (isRoof ? TITLE_ID : focusedCard),
    [focusedCard]
  );

  return (
    <View
      style={[
        isRoof ? styles.titleRoof : styles.focusedBar,
        _id !== matchingId && { display: "none" },
      ]}
    />
  );
}
