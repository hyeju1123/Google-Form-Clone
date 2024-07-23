import {StyleSheet} from 'react-native';
import {theme} from './color';

export const styles = StyleSheet.create({
  focusedWrapper: {
    flex: 1,
    marginBottom: 12,
    borderRadius: 7,
  },
  roof: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: theme.primary,
    borderRadius: 7,
  },
  bar: {
    flex: 1,
    paddingLeft: 8,
    height: 'auto',
    backgroundColor: theme.secondary,
    borderRadius: 7,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.card,
    shadowColor: theme.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  titleBar: {
    flex: 1,
    paddingLeft: 8,
    height: 'auto',
    backgroundColor: theme.secondary,
    borderRadius: 7,
  },
  focusedRadius: {
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  focusedTitleRadius: {
    borderBottomRightRadius: 7,
  },
  nonFocusedRadius: {
    borderRadius: 7,
  },
  nonFocusedTitleRadius: {
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
});
