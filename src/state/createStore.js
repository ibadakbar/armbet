import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';
import axios from 'axios';

const client = axios.create({
  baseURL: 'api.armbet.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client), reduxThunk));

export default store;