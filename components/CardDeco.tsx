import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {styles} from '@/styles/CardStyle';

import useCardFocus from '@/hooks/CardFocus';
import {TITLE_ID} from '@/recoil/QuestionState';

type CardDecoProps = PropsWithChildren & {
  _id: number;
};

export default function CardDeco({children, _id}: CardDecoProps) {
  const {focusedCard} = useCardFocus();

  const isRoof = _id === TITLE_ID;
  const isFocused = _id === focusedCard;

  return (
    <View style={[styles.focusedWrapper, isRoof && styles.roof]}>
      <View style={[isFocused && (isRoof ? styles.titleBar : styles.bar)]}>
        <View
          style={[
            styles.container,
            isFocused &&
              (isRoof ? styles.focusedTitleRadius : styles.focusedRadius),
            !isFocused &&
              (isRoof ? styles.nonFocusedTitleRadius : styles.nonFocusedRadius),
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
}
