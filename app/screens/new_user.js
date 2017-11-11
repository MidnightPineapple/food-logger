import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Button, Text } from 'native-base';

export default class NewUserScreen extends Component {

  render() {

    let { goBack } = this.props.navigation;

    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel >
              <Icon name="person" />
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Icon name="key" />
              <Label>Password</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Icon name="key" />
              <Label>Retype Password</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Icon name="code-working" />
              <Label>Qualtrics ID</Label>
              <Input />
            </Item>
          </Form>
          <Button full primary>
            <Text> Create New User </Text>
          </Button>
          <Button full primary transparent onPress={() => goBack()}>
            <Text> Back </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
