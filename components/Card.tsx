import { PropsWithChildren } from "react";
import { View } from "react-native";
import CardBottom from "./CardBottom";
import { TITLE_ID } from "@/recoil/QuestionState";
import { styles } from "@/styles/CardStyle";

type Props = PropsWithChildren & {
  _id: number;
};

const Card = ({ children, _id }: Props) => {
  return (
    <>
      {_id === TITLE_ID && <View style={styles.titleRoof} />}
      <View style={styles.container}>
        {children}
        <CardBottom _id={_id} />
      </View>
    </>
  );
};

export default Card;
