import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ImageButton from '../components/ImageButton/index';
import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
  render() {

    let { navigation } = this.props;

    // const resetAction = NavigationActions.reset({
    //   index:0,
    //   action: [NavigationActions.navigate({routeName:'SearchScreen'}),
    // NavigationActions.navigate({routeName:'SearchScreen'})]
    // })
    //let {parentNavigation} = this.props.screenProps;

    return (
      <View style={styles.container}>
        <ImageButton source={require('../assets/carrot.png')}
          value='Add Food'
          onPress={()=>navigation.navigate('SearchScreen')}
          buttonStyles = {styles.foodButton}
          />
        <ImageButton
          source={require('../assets/first_aid.jpg')}
          value="Report Symptom"
          onPress={()=>navigation.navigate('SymptomsScreen')}
          buttonStyles = {styles.symptomButton}
          />
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flex:1,
  },
  symptomButton: {
    backgroundColor:'#ff7287',
  },
  foodButton: {
    backgroundColor:'#93ff95',
  }

})
