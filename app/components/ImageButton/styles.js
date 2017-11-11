import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  inner:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',

  },
  image: {
    resizeMode:'contain',
    opacity:0.3,
    alignSelf: 'flex-end',
    flex:1,
  },
  text: {
    position:'absolute',
    alignSelf:'flex-start',
    textAlign: 'left',
    opacity:0.7,
    marginBottom: 5,
    zIndex:100,
  },
});

export default styles;
