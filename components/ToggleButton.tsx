import { useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { styles } from "@/styles/ToggleButtonStyle";
import { theme } from "@/styles/color";
import useQuestion from "@/hooks/Question";

export default function ToggleButton({ _id }: { _id: number }) {
  const { required, handleRequired } = useQuestion({ _id, itemIdx: null });
  const toggleAnim = useRef(new Animated.Value(required ? 1 : 0)).current;
  const { deepShadow, background, card, primary } = theme;

  const toggleSwtich = () => {
    Animated.timing(toggleAnim, {
      toValue: required ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    handleRequired();
  };

  const translateX = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  const buttonBg = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [deepShadow, background],
  });

  const circleBg = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [card, primary],
  });

  return (
    <TouchableOpacity onPress={toggleSwtich}>
      <Animated.View style={[styles.toggleBg, { backgroundColor: buttonBg }]}>
        <Animated.View
          style={[
            styles.toggleCircle,
            { backgroundColor: circleBg, transform: [{ translateX }] },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
