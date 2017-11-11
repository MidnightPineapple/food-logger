import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, ActivityIndicator } from 'react-native';
import Text from '../TruncatedText';
import styles from './styles';


export default class SpinnerModal extends Component {

  static propTypes = {
    visible:PropTypes.bool,
    title:PropTypes.string,
    spinnerColor:PropTypes.string,
    onRequestClose:PropTypes.func,
  }

  static defaultProps = {
    visible:true,
    title:'Loading'+String.fromCharCode(8230),
    spinnerColor:'blue',
    onRequestClose:()=>{},
  }



  render() {
    let { title, visible, spinnerColor, onRequestClose } = this.props;
    return (
      <Modal animationType="fade" transparent={true}
        visible={visible} onRequestClose={onRequestClose} >
        <View style={styles.container}>
          <View style={styles.background}/>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color={spinnerColor} style={styles.spinner}/>
            <Text style={styles.text} limit={10}>{title}</Text>
          </View>
         </View>
        </Modal>
    );
  }
}
