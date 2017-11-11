import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Button } from 'native-base';

export default class NewUserScreen extends Component {

  render() {
    let { params } = this.props.navigation.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Icon name={params.icon} />
              <Label>{params.label}</Label>
              <Input {...params.inputParams}/>
            </Item>
          </Form>
          <Button full primary>
            <Text> Submit </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
