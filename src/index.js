import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '@/reducers';
import MyRouter from '@/router';
import './utils/common.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>, 
    document.getElementById('app')
);