import { all } from 'redux-saga/effects';
import regeneratorRuntime from "regenerator-runtime";
import { event } from './S/homeS'; 

export default function* rootSaga(){
    yield  all([
        event
    ]);
}