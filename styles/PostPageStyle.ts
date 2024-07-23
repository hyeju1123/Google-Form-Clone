import {StyleSheet} from 'react-native';
import {theme} from './color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: theme.background,
  },
  scrollview: {
    minHeight: '100%',
  },
  scrollviewContainer: {
    paddingBottom: 100,
  },
});
