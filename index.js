/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry, View, Text } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import allreducer from "./reducer/reducer";
import Movies from './container/movie/index';
import createSagaMiddleware from "redux-saga";
import rootsaga from './sagaa/rootSaga';

const sagaMidleware = createSagaMiddleware();
let store = createStore(allreducer, applyMiddleware(sagaMidleware));

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
         <Movies />
      </Provider>
    )
  }
}
sagaMidleware.run(rootsaga);
AppRegistry.registerComponent('reduxSaga', () => App);
