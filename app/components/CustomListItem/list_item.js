import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View } from 'react-native';
import { Container, Content, ListItem, Left, Right, Body, List, Button, Icon, Separator, Text } from 'native-base';

export default class CustomListItem extends Component {

  static propTypes = {
    leftIcon:PropTypes.string,
    rightText:PropTypes.string,
    bodyText:PropTypes.string,
    bodyNote:PropTypes.string,
    onPress:PropTypes.func,
    hasNote:PropTypes.bool,
  }

  static defaultProps = {
    leftIcon:null,
    rightText:null,
    bodyText:null,
    onPress:null,
    hasNote:false,
    bodyNote:null,
  }

  render() {

    let { leftIcon,rightText,bodyText,onPress, bodyNote, hasNote } = this.props;

    return(
      <ListItem  icon={leftIcon?true:false} onPress={onPress}>
        {leftIcon?<Left><Icon name={leftIcon}/></Left>:null}
        <Body>
          <Text>{bodyText}</Text>
          {hasNote?<Text note>{bodyNote}</Text>:null}
        </Body>
        <Right><Text>{rightText}</Text></Right>
      </ListItem>
    )
  }
}

// <ListItem icon={leftIcon?true:false} onPress={onPress}>
//     {leftIcon?<Left><Icon name={leftIcon}/></Left>:null}
//   <Body>
//     <Text>{bodyText}</Text>
//     {hasNote?<Text note>{bodyNote}</Text>:null}
//   </Body>
//   <Right>
//     <Text>{rightText}</Text>
//   </Right>
// </ListItem>
