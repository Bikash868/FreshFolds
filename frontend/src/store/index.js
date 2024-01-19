import rootSaga from './sagas';
import rootReducer from '@store/reducers';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

// Added line
sagaMiddleware.run(rootSaga);

export default store;
