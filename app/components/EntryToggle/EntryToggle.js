import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppRegistry, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { Item, Input } from 'native-base';
import styles from './styles';

export default class EntryToggle extends Component {

  static propTypes = {
    toggleOn: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onSetDesc: PropTypes.func.isRequired,
    startColor: PropTypes.string,
    stopColor: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    startColor: 'green',
    stopColor: 'red',
    disabled: false,
  }

  renderInput = (props) =>{
    let { onSetDesc } = this.props;

    return(
    <Item >
    <Input placeholder="Short Entry Description (Optional)"
    onChangeText={(t) => onSetDesc(t)}/>
    </Item>
)}

  render() {

  let { toggleOn, onToggle, onSetDesc, startColor, stopColor, disabled } = this.props;

  return(
    <View style={styles.outsideContainer}>
      <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor:toggleOn?startColor:stopColor}]}
      onPress={()=>onToggle()}
      disabled={disabled} >
        <View style={styles.insideContainer}>
          <Icon iconStyle={styles.icon}
          size={200}
          name={toggleOn?"hourglass-start":"hourglass-end"}
          type='font-awesome'/>
          <Text> {toggleOn?"Start":"Stop"} </Text>
        </View>
      </TouchableOpacity>
      {toggleOn?null:this.renderInput()}
    </View>
  );
}

}
