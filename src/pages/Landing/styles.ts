import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2D8E4',

  },

  footer: {
    marginTop: -10,
    padding: 40,

  },

  text: {
    fontFamily: 'IndieFlower_400Regular',
    color: '#4B82A0',
    fontSize: 30,
  },

  input: {
    fontSize: 26,
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
    fontFamily: 'IndieFlower_400Regular',
  },

  searchButton: {
    paddingHorizontal: 95,
  },

  button: {
    padding: 30,
    backgroundColor: '#4B82A0',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  iconButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',

  },

  textButton: {
    color: '#FFF',
    fontFamily: 'IndieFlower_400Regular',
    fontSize: 20,
    marginLeft: 6,
  },
});

export default styles;

