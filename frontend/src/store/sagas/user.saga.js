import { takeEvery, put, call } from 'redux-saga/effects';
import * as actionTypes from '@store/actionTypes';

export function* getUserRoles() {
	try {
		// let data = yield call(, API_ENDPOINTS.getUserRoles); //Add the fetch request
		data = yield data.json();
		console.warn('role fetch action is called', data);
		yield put({
			type: actionTypes.FETCH_USER_ROLES_SUCCESS,
			payload: data.results,
		});
	} catch (err) {
		yield put({
			type: actionTypes.FETCH_USER_ROLES_FAILURE,
			payload: err.message,
		});
	}
}

export function* userSaga() {
	yield takeEvery(actionTypes.FETCH_USER_ROLES_START, getUserRoles);
}
