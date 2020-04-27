import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
   return (
      <div className="jumbotron"> 
         <h2>{counter}</h2>
         <button 
            onClick={dec}
            className="btn btn-primary btn-lg">DEC
         </button> 
         <button 
            onClick={inc}
            className="btn btn-primary btn-lg" id="inc">INC
         </button>
         <button 
            onClick={rnd}
            className="btn btn-primary btn-lg" id="rnd">RND
         </button>
      </div>
   );
};

const mapStateToProps = (state) => { // специальная функция react-redux по средству которой компонент получает доступ с глобальному хранилещу состояния 
   return { // возвращаем обьект
      counter: state,
   };
};


const mapDispatchToProps = (dispatch) => {
   const { inc, dec, rnd } = bindActionCreators(actions, dispatch);// inc, dec, rnd достаем из  * as actions и обертываем в  dispatch
   return {// возвращаем обьект
      inc,
      dec,
      rnd,
   };
};   

export default connect(mapStateToProps, mapDispatchToProps)(Counter);