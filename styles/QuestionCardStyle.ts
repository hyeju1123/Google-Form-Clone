import {StyleSheet} from 'react-native';
import {theme} from './color';

export const styles = StyleSheet.create({
  textinputWrapper: {
    flex: 1,
  },
  titleFont: {
    flexGrow: 1,
    fontSize: 25,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  descFont: {
    flexGrow: 1,
    color: theme.textSecondary,
    fontSize: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  questionBg: {
    backgroundColor: theme.shadow,
    paddingHorizontal: 5,
  },
  questionFont: {
    flexGrow: 1,
    fontSize: 16,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  itemFont: {
    flexGrow: 1,
    fontSize: 16,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  underline: {
    flexGrow: 1,
    borderBottomWidth: 2,
    borderColor: theme.shadow,
  },
  focusedUnderline: {
    flexGrow: 1,
    borderBottomWidth: 2,
    borderColor: theme.primary,
    marginHorizontal: 10,
  },
  dirRowBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 2,
    minHeight: 40,
  },
  asterisk: {
    position: 'absolute',
    top: 10,
    color: theme.required,
  },
});
