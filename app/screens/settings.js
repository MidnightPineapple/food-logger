import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import { Container, Content, Header, Left, Button, Icon, Switch, Body, Right, Item, Input, List, ListItem, Text } from 'native-base';
import styles from '../config/styles';

export default class SettingsScreen extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  submit() {
    console.log("Pressed")
  }


  render() {

    const settingsPageOptions = {
      email: {icon:"mail", title:"New Email Address", callback:this.submit.bind(this)},
      feedback: {icon:'help', title:'Message', callback:this.submit.bind(this), inputParams:{multiline:true, numberOfLines:5}},
      bug:{icon:'bug', title:"Bug Description", callback:this.submit.bind(this), inputParams:{multiline:true, numberOfLines:5}},
      new_password: {icon:"key", title:"New Password", callback:this.submit.bind(this), inputParams:{secureTextEntry:true}, repeat:true},
      old_password: {icon:"key", title:"Old Password", callback:this.submit.bind(this), inputParams:{secureTextEntry:true}, repeat:true},
    }

    let { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <List style={styles.list}>
            <ListItem style={styles.listitem}>
              <Button transparent dark onPress={() => navigate('EditSettingsScreen', settingsPageOptions.email)}>
                <Text uppercase={false}>Change Email</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.listitem}>
              <Button transparent dark onPress={() => navigate('EditSettingsScreen', settingsPageOptions.old_password)}>
                <Text uppercase={false}>Change Password</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.listitem}>
              <Body>
                <Button transparent dark onPress={() => {console.log('pressed')} } >
                  <Text uppercase={false}>Remind me every meal</Text>
                </Button>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem style={styles.listitem}>
              <Button transparent dark onPress={() => navigate('EditSettingsScreen', settingsPageOptions.feedback)}>
                <Text uppercase={false}>Send Message To Admin</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.listitem}>
              <Button transparent dark onPress={() => navigate('EditSettingsScreen', settingsPageOptions.bug)}>
                <Text uppercase={false}>Report Bug</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
