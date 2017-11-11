import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, } from 'react-native';
import styles from './styles';


export default class TruncatedText extends Component {

  static propTypes = {
    children:PropTypes.string.isRequired,
    limit:PropTypes.number,
    style:PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ])
  }

  static defaultProps = {
    children:'',
    limit:10,
    style:null,
  }



  render() {
    let { children, style, limit } = this.props;
    let text = children.concat();
    if(text.length>limit) {
      text = text.substring(0,limit-1) + String.fromCharCode(8230);
    }

    return (
      <Text style={style}>{text}</Text>
    );
  }
}
