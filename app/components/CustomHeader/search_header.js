import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Body, Title, Left, Button, Icon, Right, Item, Input, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../lib/mapDispatchToProps';

class SearchHeader extends Component {

  constructor() {
    super();
    this.state={
      query:"",
    }
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onLeftPress: PropTypes.func.isRequired,
    onChangeText: PropTypes.func,
    icon: PropTypes.string,
    styles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    icon:'arrow-back',
    onChangeText:null,
  }



  render() {

    let { title, icon, onLeftPress, onChangeText, styles, } = this.props;

    //If I end up needing SearchHeader in more than one SearchScreen with redux
    // I should probably make a new class or object to wrap each individual
    // search header and pass in the on text change class, then use another
    // pass spread props of the wrapper into search header, then pass navigation
    // into the wrapper props

    if (!onChangeText) onChangeText = (query) => {
      this.setState({query:query});
      setTimeout(()=>{if(this.state.query===query) this.props.fetchFoods(query)},1000)
    }

    return (
      <StyleProvider style={getTheme(material)} >
        <Header searchBar rounded>
            <Button transparent onPress={onLeftPress} >
              <Icon name={icon} />
            </Button>
            <Item>
              <Icon name="search" />
              <Input placeholder={title}
                onChangeText={onChangeText}
              />
            </Item>
        </Header>
      </StyleProvider>
    );
  }
}

export default connect(()=>({}), mapDispatchToProps)(SearchHeader);
