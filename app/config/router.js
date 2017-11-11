import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';

import LoginScreen from '../screens/login';
import NewUserScreen from '../screens/new_user';
import SettingsScreen from '../screens/settings';
import EntriesScreen from '../screens/entries';
import SearchScreen from '../screens/search';
import SymptomsScreen from '../screens/symptoms';
import HomeScreen from '../screens/home';
import EditSettingsScreen from '../screens/edit_settings';

import CustomDrawer from '../components/CustomDrawer/index';
import CustomHeader, { SearchHeader } from '../components/CustomHeader/index';

import { stackNavConfig } from './settings';

const EntriesStackNav = StackNavigator({
  EntriesScreen: {
    screen: EntriesScreen,
    navigationOptions:({ screenProps:{ parentNavigation:pNav } }) => ({
      header: <CustomHeader title="Entries" icon="menu"
      headerProps={{hasTabs:true}}
      onLeftPress={() => { pNav.navigate("DrawerOpen"); }} />,
    }),
    ...stackNavConfig,
  }
})

const SettingsStackNav = StackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
  },
  EditSettingsScreen: {
    screen: EditSettingsScreen,
    navigationOptions:({ navigation }) => ({
      header: <CustomHeader title="Edit Settings" onLeftPress={() => navigation.goBack(null)} />,
    })
  }
},
{
  navigationOptions:({ screenProps:{ parentNavigation:pNav } }) => ({
    header: <CustomHeader title="Settings" icon="menu" onLeftPress={() => {
      pNav.navigate("DrawerOpen"); }} />,
  }),
  ...stackNavConfig,
})

const HomeStackNav = StackNavigator({
  HomeScreen: {
    screen:HomeScreen,
    navigationOptions: ({ screenProps:{ parentNavigation:pNav } }) => ({
      header: <CustomHeader title="Home" icon="menu" onLeftPress={() => {
        pNav.navigate("DrawerOpen"); }} />,
    }),
  },
  SearchScreen: {
    screen:SearchScreen,
    navigationOptions:({ navigation }) => ({
      header: <SearchHeader title="Search Foods"
        onLeftPress={() => navigation.goBack(null)} />,
    }),
  },
  SymptomsScreen: {
    screen:SymptomsScreen,
    navigationOptions:({ navigation }) => ({
      header: <CustomHeader title="Symptoms" onLeftPress={() => navigation.goBack(null)} />,
    })
  },
}, {...stackNavConfig,})

const HomeNavWrap = React.createClass({
  render() {
    let { navigation } = this.props;
    return <HomeStackNav screenProps={{parentNavigation:navigation}} navigation={navigation} />
  },
})
const SettingsNavWrap = React.createClass({
  render() {
    let { navigation } = this.props;
    return <SettingsStackNav screenProps={{parentNavigation:navigation}} navigation={navigation} />
  },
})
const EntriesNavWrap = React.createClass({
  render() {
    let { navigation } = this.props;
    return <EntriesStackNav screenProps={{parentNavigation:navigation}} navigation={navigation} />
  },
})

//FIXME: somehow the navigation of the wrapped cmpts still don't go through my redux store
HomeNavWrap.router = HomeStackNav.router;
EntriesNavWrap.router = EntriesStackNav.router;
SettingsNavWrap.router = SettingsStackNav.router;

const CentralDrawerNav = DrawerNavigator({
  HomeNavWrap: {
    screen:HomeNavWrap,
    navigationOptions:{drawerLabel:'Home'}
  },
  EntriesNavWrap: {
    screen:EntriesNavWrap,
    navigationOptions:{drawerLabel:'Entries'}
  },
  SettingsNavWrap: {
    screen:SettingsNavWrap,
    navigationOptions:{drawerLabel:'Settings'}
  },
},
{
  drawerWidth:200,
  drawerPosition:'left',
  contentComponent: props => <CustomDrawer {...props} />,
})

const RootStackNav = StackNavigator({
  LoginScreen: {
    screen:LoginScreen,
  },
  NewUserScreen: {
    screen:NewUserScreen,
  },
  CentralDrawerNav: {
    screen:CentralDrawerNav,
  }
},
{
  navigationOptions: {header:null}
})



export default RootStackNav;
