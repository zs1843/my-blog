import { put, call, takeEvery } from 'redux-saga/effects';
import http from '@/utils/http';

import { GET_POSTS } from '@/reducers/types'

export function* getPosts(){
    const res = yield call(()=>http.get('posts'));
    yield put({ type: GET_POSTS, payload: res })
}

export function* event(){
    // 注册事件
    yield takeEvery('GET_POSTS_REQUEST', getPosts);
}