import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import regeneratorRuntime from "regenerator-runtime";
import rootSaga from '@/sagas';
import { event } from '@/sagas/S/homeS'; 
import reducers from '@/reducers';
import MyRouter from '@/router';
import './utils/common.less'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(event);

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>, 
    document.getElementById('app')
);