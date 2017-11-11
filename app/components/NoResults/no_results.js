import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity} from 'react-native';
import { Item, Input, Icon, Text } from 'native-base';
import styles from './styles';

export default class NoResults extends Component {

  static propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    icon:PropTypes.string,
    textStyles:PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
    iconStyles:PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    title: "Oops!",
    subtitle: "We couldn't find any results.",
    icon: 'ios-outlet',
    textStyles: null,
    iconStyles: null,
  }

  render() {

    let {title, subtitle, icon, textStyles, iconStyles} = this.props;

  return(
        <View style={styles.container}>
          <Icon style={[styles.icon, iconStyles]}
          name={icon} />
          <Text style={[styles.title, styles.text, textStyles]}>{title}</Text>
          <Text style={[styles.subtitle, styles.text, textStyles]}>{subtitle}</Text>
        </View>
  );
}

}
