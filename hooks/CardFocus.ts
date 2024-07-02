import { cardFocusState } from "@/recoil/ActionState";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export default function CardFocus() {
  const [focusedCard, setFocusedCard] = useRecoilState(cardFocusState);

  const handleCardFocus = useCallback(
    (lastId: number | null) => {
      setFocusedCard(lastId);
    },
    [setFocusedCard]
  );

  return { focusedCard, handleCardFocus };
}
