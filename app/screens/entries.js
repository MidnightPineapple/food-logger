import React, { Component } from 'react';
import { ListView, Text, StyleSheet } from 'react-native';
import { Container, Content, Tabs, Tab, ScrollableTab } from 'native-base';
import NoResults from '../components/NoResults';

import SeparatedList from '../components/SeparatedList';

const items = [{
  title:"4 Days Ago",
  data:[
  {left:"Hi",right:"Hi"},
  {left:"Hello",right:"Hello"},
  {left:"Hola",right:"Hola"},
  {left:"NiHao",right:"NiHao"},
]},
{
  title:"3 Days Ago",
  data:[
  {left:"Hi",right:"Hi"},
  {left:"Hello",right:"Hello"},
  {left:"Konnichiwa",right:"Konnichiwa"},
  {left:"NiHao",right:"NiHao"},
]},
{
  title:"2 Days Ago",
  data:[
  {left:"Hi",right:"Hi"},
  {left:"Hello",right:"Hello"},
  {left:"Konnichiwa",right:"Konnichiwa"},
  {left:"NiHao",right:"NiHao"},
]},
{
  title:"Yesterday",
  data:[
  {left:"Hi",right:"Hi"},
  {left:"Hello",right:"Hello"},
  {left:"Konnichiwa",right:"Konnichiwa"},
  {left:"NiHao",right:"NiHao"},
]},
{
  title:"Today",
  data:[
  {left:"Hi",right:"Hi"},
  {left:"Hello",right:"Hello"},
  {left:"Konnichiwa",right:"Konnichiwa"},
  {left:"NiHao",right:"NiHao"},
]},
]

export default class EntriesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listViewData: items,
    };
    this.deleteRow = this.deleteRow.bind(this);
  }

  deleteRow(secId, rowId, rowMap, key) {
    rowMap[`${secId}${rowId}`].props.closeRow();

    let newState = this.state.listViewData.slice();
    let newData = newState[key].data.slice();
    let rID = parseInt(rowId);
    newData.splice(rID,1);
    newState[key].data = newData;
    this.setState({listViewData:newState})
  }

  render() {

    const styles = new StyleSheet.create({
      tab: {flex:(this.state.listViewData.length<4)?1:null}
    })

    const renderTab = (tab, key) => (
      <Tab heading={tab.title} tabStyle={styles.tab} key={key} activeTabStyle={styles.tab}>
        {tab.data.length===0?<NoResults/>:<SeparatedList separator="Symptoms" data={tab.data}
          deleteRow={(secId, rowId, rowMap) => {this.deleteRow(secId, rowId, rowMap, key)}}/>}
      </Tab>
    )

    const tabs = this.state.listViewData.map(renderTab.bind(this));

    return (
      <Container>
        <Content>
          <Tabs renderTabBar={() => <ScrollableTab />} locked
            initialPage = {this.state.listViewData.length-1}>
            {tabs}
          </Tabs>
        </Content>
      </Container>
    );
    // return (
    //   <Container>
    //     <Content>
    //       {renderTab(items[0],0)}
    //     </Content>
    //   </Container>
    // );
  }
}
