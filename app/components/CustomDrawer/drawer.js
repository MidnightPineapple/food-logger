import React, { Component } from 'react';
import { Button, Container, Content, Text } from 'native-base';
import { DrawerItems, NavigationActions } from 'react-navigation';

export default class CustomDrawer extends Component {

  logout() {
    let { dispatch, navigate } = this.props.navigation;
    let navigationAction = NavigationActions.navigate({
      routeName:'LoginScreen',
    });
    let resetAction = NavigationActions.reset({
      index:0,
      actions:[NavigationActions.navigate({routeName:'LoginScreen'})],
    });

    dispatch(navigationAction);
    //dispatch(resetAction);
    //FIXME: Can't find a good way for it to reset from the root nav instead of the child nav

  }

  render() {

    return (
      <Container >
        <Content>
          <DrawerItems {...this.props} />
          <Button full primary onPress={this.logout.bind(this)} >
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
