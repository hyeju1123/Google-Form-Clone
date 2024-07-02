import { PropsWithChildren } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import CardDeco from "./CardDeco";
import CardBottom from "./CardBottom";
import { styles } from "@/styles/CardStyle";
import useCardFocus from "@/hooks/CardFocus";

type Props = PropsWithChildren & {
  _id: number;
};

const Card = ({ children, _id }: Props) => {
  const { handleCardFocus } = useCardFocus();

  return (
    <>
      <CardDeco _id={_id} isRoof />
      <TouchableWithoutFeedback onPress={() => handleCardFocus(_id)}>
        <View style={styles.focusedWrapper}>
          <CardDeco _id={_id} />
          <View style={styles.container}>
            {children}
            <CardBottom _id={_id} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Card;
