import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

export default class EditSettingsScreen extends Component {

  render() {

    let { icon, title, callback, inputParams, repeat } = this.props.navigation.state.params
    let { goBack } = this.props.navigation

    let renderRetype = () => (
      <Item stackedLabel>
        <Icon name="repeat" />
        <Label>Retype {title}</Label>
        <Input {...inputParams} />
      </Item>
    );

    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Icon name={icon} />
              <Label>Enter {title}</Label>
              <Input {...inputParams}/>
            </Item>
            {repeat?renderRetype():null}
          </Form>
          <Button full primary onPress={callback}>
            <Text> Change {title} </Text>
          </Button>
          <Button transparent full primary onPress={() => goBack()}>
            <Text> Back </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
