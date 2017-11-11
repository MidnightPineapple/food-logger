import { NavigationActions } from 'react-navigation';
import Nav from '../config/router';

const initialState = Nav.router.getStateForAction(Nav.router.getActionForPathAndParams('LoginScreen'))

export default (state = initialState, action ) => {
  const nextState = Nav.router.getStateForAction(action,state);
  return nextState || state;
}
