import { SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Modal from "./Modal";
import { styles } from "@/styles/ActionSheetStyle";
import useActionSheet from "@/hooks/ActionSheet";

export default function ActionSheet() {
  const {
    showSheet,
    showSheet: { state },
    handleActionSheet,
  } = useActionSheet();

  return (
    <TouchableWithoutFeedback onPress={() => handleActionSheet(false, null)}>
      <SafeAreaView
        style={[styles.container, { display: state ? "flex" : "none" }]}
      >
        <Modal showModal={showSheet} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
