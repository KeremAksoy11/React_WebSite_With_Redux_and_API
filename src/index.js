import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, applyMiddleware(thunk)); // birden fazla veri redüktörü varsa bu şekilde providere import ederiz.

ReactDOM.render(
    <Provider store={store}>
        <App/>   
    </Provider>,
    document.querySelector('#root')
);

// <App/> ile postliste yazılmış olan bütün değerleri ekrana çıkarttık. 