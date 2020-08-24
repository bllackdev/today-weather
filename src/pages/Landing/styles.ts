import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2D8E4',

  },

  footer: {
    marginTop: 10,
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
    marginTop: 40,
    marginBottom: 16,
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#4B82A0',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
});

export default styles;

