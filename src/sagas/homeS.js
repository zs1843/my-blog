import { call } from 'redux-saga/effects'

export default function* test(){
    yield call(console.log(3123))
}