import {combineReducers} from 'redux';
import CryptoRreducer from './CryptoReducer';

export default combineReducers({
  crypto: CryptoRreducer
});
