import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View, Text } from 'react-native';
import { Container, Content, ListItem, Left, Right, Body, List, Button, Icon, Separator } from 'native-base';
import CustomListItem from '../CustomListItem';

export default class SeparatedList extends Component {

  static propTypes = {
    deleteRow:PropTypes.func.isRequired,
    data:PropTypes.array.isRequired,
    separator:PropTypes.string,
  }

  static defaultProps = {
    separator:null,
    data: null,
  }

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  render() {
    let { separator, data, deleteRow } = this.props;
    return (
      <View>
        {separator?<Separator bordered><Text>{separator}</Text></Separator>:null}
        <View>
          <List
            dataSource = {this.ds.cloneWithRows(data)}
            renderRow = { data =>
              (<CustomListItem bodyText={data.left} rightText={data.right} />)
            }
            disableRightSwipe
            renderLeftHiddenRow={() => {return}}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            rightOpenValue={-75} />
            </View>
        </View>
    );
  }
}
