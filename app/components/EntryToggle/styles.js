import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  outsideContainer: {
    width:300,
    height:350,
    flexDirection:'column',
  },
  buttonContainer: {
    width:300,
    height:300,
    borderRadius: 150,
  },
  insideContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  icon: {
    height:200,
    width:170,
  }
})

export default styles;
