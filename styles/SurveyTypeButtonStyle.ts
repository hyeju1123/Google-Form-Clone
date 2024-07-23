import {StyleSheet} from 'react-native';
import {theme} from './color';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  typeButton: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 25,
    maxWidth: 230,
    borderWidth: 0.5,
    borderColor: theme.deepShadow,
    borderRadius: 5,
  },
});
