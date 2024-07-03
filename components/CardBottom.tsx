import { View, Text, TouchableOpacity } from "react-native";
import ToggleButton from "./ToggleButton";
import VerticalDotsIcon from "./icons/VerticalDotsIcon";
import { styles } from "@/styles/CardBottomStyle";

import usePopup from "@/hooks/Popup";
import useCardFocus from "@/hooks/CardFocus";
import { TITLE_ID } from "@/recoil/QuestionState";

export default function CardBottom({ _id }: { _id: number }) {
  const { handlePopup } = usePopup();
  const { focusedCard } = useCardFocus();

  const setDisplay = () => {
    return _id === TITLE_ID || _id !== focusedCard ? "none" : "flex";
  };

  return (
    <View style={[styles.container, { display: setDisplay() }]}>
      <Text>필수</Text>
      <ToggleButton _id={_id} />
      <TouchableOpacity onPress={() => handlePopup(true, _id)}>
        <VerticalDotsIcon />
      </TouchableOpacity>
    </View>
  );
}
