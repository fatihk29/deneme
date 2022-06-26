import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: 17,
    flex: 1,
    marginRight: 20,
  },
  icon: {
    right: 20,
    position: 'absolute',
  },
});
