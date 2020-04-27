import React from 'react';
import ReactDOM from 'react-dom';
/**
 * createStore - специальная функция по правилам которой создается хранилище и вносится в переменную
 * bindActionCreators - специальная функция для обертки актионов в dispatch
 */
import { createStore } from 'redux';//из библиотеки 
/**  
 * react-redux библиотека спец.для удобного соединения React с Redux
 * Provider - спец.функция (поставщик)
 */
import { Provider } from 'react-redux';

// import { Counter } from './components/counter';
import { App } from './components/app';
import reduser from './reduser';
/**
 *  * as actions ситаксис помещает все экшены из файла эшенов 
 */
// import * as actions from './actions';

const store = createStore(reduser);// в переменной store собственно хронилище в корором редусер полный условий :)

// const { dispatch } = store;// сокращаем store.dispatch(inc());
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);// inc, dec, rnd достаем из  * as actions и обертываем в  dispatch
   ReactDOM.render(
   <Provider store={store}>
      <App/>   
   </Provider>,
   document.getElementById('root'));
// document.getElementById('inc')
// .addEventListener('click', inc);

// document.getElementById('dec')
// .addEventListener('click', dec);

// document.getElementById('rnd')
// .addEventListener('click', () => {
//    const payload = Math.floor(Math.random()*10);
//    rnd(payload);
// });

// const update = () => {
//    document.getElementById('counter')
//    .innerHTML = store.getState();
// };
// store.subscribe(update);

// store.subscribe(() => {// специальная функция subscribe для ловли всех изменений стора
//    console.log(store.getState());// специальная функция getState что бы получать текущее состояние состояния  
// });
// store.dispatch({type: 'INC'}); // специальная функция dispatch для вызова-использования экшена {type: 'INC'} ! так как наш экшен + 1 
// store.dispatch({type: 'INC'}); // теперь к 1 добавится еще +1

// let state = reduser(initialState, { type: 'INC' });//аргументы функции initialState, { type: 'INC' }
// console.log("Work REDUX:", state);
