import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
  auth, // es6 for auth: auth
  form: formReducer
});
