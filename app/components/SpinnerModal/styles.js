import { StyleSheet } from 'react-native';

export default styles = new StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  modal:{
    height:130,
    width:200,
    backgroundColor:'white',
    justifyContent:'center',
    borderStyle:'solid',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
  },
  text:{
    fontSize:24,
    textAlign:'center',
    color:'black',
  },
  spinner:{
    padding:10,
  },
  background:{
    backgroundColor:'black',
    opacity:.5,
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  }
})
