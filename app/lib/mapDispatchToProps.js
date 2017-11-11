import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

export default function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}
