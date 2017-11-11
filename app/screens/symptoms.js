import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ImageButton from '../components/ImageButton/index';

export default class SymptomsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <ImageButton source={require('../assets/carrot.png')}
            value="Sym 1"
            onPress={()=>console.log('pressed')}
            buttonStyles = {{backgroundColor:'#eeff93',}}
            />
          <ImageButton
            source={require('../assets/first_aid.jpg')}
            value="Sym 2"
            onPress={()=>console.log('pressed')}
            buttonStyles = {{backgroundColor:'#93fff7',}}
            />
        </View>
        <View style={styles.row}>
          <ImageButton source={require('../assets/carrot.png')}
            value="Sym 3"
            onPress={()=>console.log('pressed')}
            buttonStyles = {{backgroundColor:'#eb93ff',}}
            />
          <ImageButton
            source={require('../assets/first_aid.jpg')}
            value="Sym 4"
            onPress={()=>console.log('pressed')}
            buttonStyles = {{backgroundColor:'#ff7287',}}
            />
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flex:1,
  },
  row:{
    flexDirection:'row',
    flex:1,
  },

})
