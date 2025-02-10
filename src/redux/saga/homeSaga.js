import {
  all,
  call,
  fork,
  put,
  takeLatest,
} from "redux-saga/effects";
import { FETCH_USERS_API, USER_API } from "../../utils/constants";
import { getData } from "../../utils/service";
import { setUserApiStatus, setUsersData } from "../reducer/appSlice";

function* workerToLoadUsersData(action, signal) {
  try {
    console.log("workerToLoadUsersData");
    const jsonResponse = yield call(getData, USER_API);
    console.log(jsonResponse);
    if (jsonResponse?.data?.success === true) {
      yield put(setUserApiStatus(jsonResponse.data.success));
    }
  } catch (error) {
    console.error(error);
  }
}

function* workerForFetchUsersData(action, signal) {
  try {
    console.log("workerForFetchUsersData");
    const jsonResponse = yield call(getData, FETCH_USERS_API);
    console.log(jsonResponse);
    if (jsonResponse?.data?.success === true) {
      yield put(setUsersData(jsonResponse?.data?.data));
    }
  } catch (error) {
    console.error(error);
  }
}

function* watcherToLoadUsersData() {
  yield takeLatest("LOAD_USERS", workerToLoadUsersData);
}

function* watcherToFetchUsersData() {
  yield takeLatest("FETCH_USERS", workerForFetchUsersData);
}

export default function* homeSaga() {
  yield all([fork(watcherToLoadUsersData), fork(watcherToFetchUsersData)]);
}
