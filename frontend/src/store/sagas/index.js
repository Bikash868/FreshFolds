import { all, fork } from "redux-saga/effects";
import { userSaga } from '@store/sagas/user.saga';

const rootSaga = function* () {
  yield all([
    fork(userSaga),
    // Other forks
  ]);
};

export default rootSaga;