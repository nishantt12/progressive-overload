import {createStore, applyMiddleware} from 'redux'


import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './rootReducer'
import { rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store;
