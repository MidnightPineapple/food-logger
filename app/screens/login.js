import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { showToast } from '../lib/toast'
import SpinnerModal from '../components/SpinnerModal'

export default class LoginScreen extends Component {


  render() {
    return (
      <Container>
        <Content>
          <SpinnerModal visible={false} />
          <Form>
            <Item floatingLabel >
              <Icon name="person" />
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Icon name="key" />
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button full primary onPress={() => this.props.navigation.navigate('CentralDrawerNav')} >
            <Text> Sign In </Text>
          </Button>
          <Button full transparent primary onPress={() => this.props.navigation.navigate('NewUserScreen')} >
            <Text> New User? </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
