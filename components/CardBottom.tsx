import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TITLE_ID } from "@/recoil/QuestionState";
import usePopup from "@/hooks/Popup";
import { styles } from "@/styles/CardBottomStyle";

export default function CardBottom({ _id }: { _id: number }) {
  const { handlePopup } = usePopup();

  return (
    <View style={[styles.container, _id === TITLE_ID && { display: "none" }]}>
      <Text>필수</Text>
      <TouchableOpacity onPress={() => handlePopup(true, _id)}>
        <MaterialCommunityIcons name="dots-vertical" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
