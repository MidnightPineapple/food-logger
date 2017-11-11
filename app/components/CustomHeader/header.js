import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Header, Body, Title, Left, Button, Icon, Right } from 'native-base';

export default class CustomHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onLeftPress: PropTypes.func.isRequired,
    icon: PropTypes.string,
    styles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
    headerProps: PropTypes.object,
  }

  static defaultProps = {
    icon:'arrow-back',
  }

  render() {

    const { title, icon, onLeftPress, styles, headerProps } = this.props;

    return (
      <Header {...headerProps}>
        <Left>
          <Button transparent onPress={onLeftPress}>
            <Icon name={icon} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
