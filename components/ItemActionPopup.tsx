import {TouchableOpacity, View} from 'react-native';
import CopyIcon from './icons/CopyIcon';
import ActionButton from './ActionButton';
import DeleteIcon from './icons/DeleteIcon';
import {styles} from '@/styles/ItemActionPopupStyle';

import usePopup from '@/hooks/Popup';
import useQuestionList from '@/hooks/QuestionList';
import {useRecoilValue} from 'recoil';
import {questionState} from '@/recoil/QuestionState';

type ItemActionPopupProps = {
  showPopup: boolean;
};

export default function ItemActionPopup({showPopup}: ItemActionPopupProps) {
  const {
    showPopup: {lastId},
    handlePopup,
  } = usePopup();
  const {addQuestion, removeQuestion} = useQuestionList();
  const copiedQuestion = useRecoilValue(questionState(lastId || 0));

  const handleAddQuestion = () => {
    addQuestion(copiedQuestion);
    handlePopup(false, null);
  };

  const handleRemoveQuestion = () => {
    removeQuestion(lastId || 0);
    handlePopup(false, null);
  };

  return (
    <View style={[styles.container, {display: showPopup ? 'flex' : 'none'}]}>
      <TouchableOpacity onPress={handleAddQuestion}>
        <ActionButton padding={20} text="항목 복제" icon={<CopyIcon />} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemoveQuestion}>
        <ActionButton padding={20} text="삭제" icon={<DeleteIcon />} />
      </TouchableOpacity>
    </View>
  );
}
