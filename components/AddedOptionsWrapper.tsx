import {useCallback} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import QuestionCheckIcon from './QuestionCheckIcon';
import {styles} from '@/styles/AddedOptionsWrapperStyle';

import useQuestion from '@/hooks/Question';
import useCardFocus from '@/hooks/CardFocus';
import {TITLE_ID} from '@/recoil/QuestionState';

type AddedOptionsWrappertype = {
  _id: number;
};

export default function AddedOptionsWrapper({_id}: AddedOptionsWrappertype) {
  const {focusedCard} = useCardFocus();
  const {hasOther, surveyType, handleAddOption} = useQuestion({
    _id,
    itemIdx: null,
  });

  const handleShow = useCallback(() => {
    return _id === TITLE_ID || !(_id === focusedCard) ? 'none' : 'flex';
  }, [_id, focusedCard]);

  return (
    <View style={[styles.container, {display: handleShow()}]}>
      <QuestionCheckIcon surveyType={surveyType} />
      <View style={styles.dirRow}>
        <TouchableOpacity
          onPress={() => {
            handleAddOption();
            Keyboard.dismiss();
          }}>
          <Text style={styles.optionText}>옵션 추가</Text>
        </TouchableOpacity>
        {!hasOther && (
          <>
            <Text> 또는 </Text>
            <TouchableOpacity>
              <Text style={styles.otherText}>'기타' 추가</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
