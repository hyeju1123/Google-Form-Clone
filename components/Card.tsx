import {PropsWithChildren} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import CardDeco from './CardDeco';
import CardBottom from './CardBottom';
import useCardFocus from '@/hooks/CardFocus';

type Props = PropsWithChildren & {
  _id: number;
};

const Card = ({children, _id}: Props) => {
  const {handleCardFocus} = useCardFocus();

  return (
    <TouchableWithoutFeedback onPress={() => handleCardFocus(_id)}>
      <CardDeco _id={_id}>
        {children}
        <CardBottom _id={_id} />
      </CardDeco>
    </TouchableWithoutFeedback>
  );
};

export default Card;
