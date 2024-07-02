import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TITLE_ID } from "@/recoil/QuestionState";

import usePopup from "@/hooks/Popup";
import useCardFocus from "@/hooks/CardFocus";
import { styles } from "@/styles/CardBottomStyle";

export default function CardBottom({ _id }: { _id: number }) {
  const { handlePopup } = usePopup();
  const { focusedCard } = useCardFocus();

  const setDisplay = () => {
    return _id === TITLE_ID || _id !== focusedCard ? "none" : "flex";
  };

  return (
    <View style={[styles.container, { display: setDisplay() }]}>
      <Text>필수</Text>
      <TouchableOpacity onPress={() => handlePopup(true, _id)}>
        <MaterialCommunityIcons name="dots-vertical" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
