import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import { Container, Content,Button, Item, List, ListItem, Text } from 'native-base';
import { connect } from 'react-redux';
import mapDispatchToProps from '../lib/mapDispatchToProps';
import styles from '../config/styles';
import NoResults from '../components/NoResults';

class SearchScreen extends Component {

    renderRow = (data) =>(
      <ListItem style={styles.ListItem}>
        <Button transparent dark >
          <Text>{data.name}</Text>
        </Button>
      </ListItem>
    )


    renderList = () => (
      <Content>
        <List dataArray = {this.props.searchedFoods}
          renderRow = {this.renderRow.bind(this)}
          style={styles.list} />
      </Content>
    )

    render() {
      return (
        <Container>
          {this.props.searchedFoods.length===0?<NoResults/>:this.renderList()}
        </Container>
      );
    }
}

export default connect((state) => ({searchedFoods:state.searchedFoods}) , mapDispatchToProps)(SearchScreen);
