import {memo, useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';

import useQuestion from '@/hooks/Question';
import useCardFocus from '@/hooks/CardFocus';
import {TITLE_ID} from '@/recoil/QuestionState';
import {styles} from '@/styles/QuestionCardStyle';

type FocusableTextInputProps = {
  _id: number;
  itemIdx: number | null;
};

const FocusableTextInput = ({_id, itemIdx}: FocusableTextInputProps) => {
  const {
    title,
    focused,
    placeholder,
    handleChange,
    handleFocus,
    style,
    required,
  } = useQuestion({_id, itemIdx});
  const {handleCardFocus} = useCardFocus();

  const handleStyle = useCallback(() => {
    const underline = focused && styles.focusedUnderline;
    const questionBackground =
      focused && itemIdx === null && _id !== TITLE_ID && styles.questionBg;
    return [style, underline, questionBackground];
  }, [focused, _id, itemIdx, style]);

  return (
    <View style={styles.textinputWrapper}>
      <TextInput
        value={title}
        autoFocus={focused ? true : false}
        placeholder={placeholder}
        onChangeText={handleChange}
        onFocus={() => {
          handleCardFocus(_id);
          handleFocus(_id, true);
        }}
        onBlur={() => handleFocus(_id, false)}
        style={handleStyle()}
      />
      {!focused && itemIdx === null && required && (
        <Text style={[styles.asterisk]}>*</Text>
      )}
    </View>
  );
};

export default memo(FocusableTextInput);
