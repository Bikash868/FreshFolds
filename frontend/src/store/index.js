import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { userSaga } from '@store/sagas/user.saga';
import { persistStore } from 'redux-persist';
import { all } from 'redux-saga/effects';
import rootReducer from '@store/reducers';

export let persistor = '';

const asyncDispatchMiddleware = (store) => (next) => (action) => {
	let syncActivityFinished = false;
	let actionQueue = [];

	function flushQueue() {
		actionQueue.forEach((a) => store.dispatch(a)); // flush queue
		actionQueue = [];
	}

	function asyncDispatch(asyncAction) {
		actionQueue = actionQueue.concat([asyncAction]);

		if (syncActivityFinished) {
			flushQueue();
		}
	}

	const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

	next(actionWithAsyncDispatch);
	syncActivityFinished = true;
	flushQueue();
};

const configureStore = (initialState) => {
	const middlewares = [asyncDispatchMiddleware];

	const sagaMiddleware = createSagaMiddleware();
	middlewares.push(sagaMiddleware);

	// const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
	// const enhancers = [middlewareEnhancer];
	// const composedEnhancers = compose(...enhancers);
	const store = createStore(rootReducer, initialState, middlewares);

	function* rootSaga() {
		yield all([
			userSaga()
		]);
	}

	sagaMiddleware.run(rootSaga);
	persistor = persistStore(store);
	return store;
};

const store = configureStore();
export default store;
