import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, Image, TouchableHighlight,View } from 'react-native';
import styles from './styles'

export default class ImageButton extends Component {
  static propTypes = {
    source: PropTypes.any.isRequired,
    value: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    buttonStyles: { backgroundColor:'#90f774' },
    textStyles: {
      color: '#333333',
      fontFamily: 'notoserif',
      fontSize:50,
      fontWeight:'bold',
    }
  }

  render() {

    const { source, value, onPress, buttonStyles, textStyles } = this.props;

    return (
        <TouchableHighlight onPress={onPress} style={[styles.container, buttonStyles ]} underlayColor="ivory">
          <View style={styles.inner}>
            <Text style={[styles.text, textStyles ]} >{value}</Text>
            <Image style={styles.image} source={source} />
          </View>
        </TouchableHighlight>

    );
  }
}
