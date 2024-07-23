import {useCallback} from 'react';
import {
  Platform,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ActionSheet from '@/components/ActionSheet';
import QuestionCard from '@/components/QuestionCard';
import BottomActionTab from '@/components/BottomActionTab';
import ItemActionPopup from '@/components/ItemActionPopup';
import {styles} from '@/styles/PostPageStyle';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import usePopup from '@/hooks/Popup';
import useQuestionList from '@/hooks/QuestionList';

type PostPageProps = NativeStackScreenProps<RootStackParamList, 'Post'>;

export default function PostPage({navigation: {navigate}}: PostPageProps) {
  const {questionList} = useQuestionList();
  const {
    showPopup: {state},
    handlePopup,
  } = usePopup();

  const moveToPreview = useCallback(() => {
    navigate('Preview');
  }, [navigate]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        handlePopup(false, null);
      }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            style={styles.scrollview}
            contentContainerStyle={styles.scrollviewContainer}
            onStartShouldSetResponder={() => true}>
            {questionList.map(({_id}) => (
              <QuestionCard key={_id} _id={_id} />
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
        <ActionSheet />
        <ItemActionPopup showPopup={state} />
        <BottomActionTab moveToPreview={moveToPreview} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
