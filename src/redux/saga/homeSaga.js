import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { DO_INITIAL_SETUP, DO_SEARCH, FIND_USER } from "../../utils/constants";
import { getData, postData } from "../../utils/service";
import {
  setIsUserGridLoading,
  setOpenDetails,
  setSetUpMessage,
  setSetupStatus,
  setUserDetails,
  setUsersData,
} from "../reducer/appSlice";

function* workerForinitialSetup(action, signal) {
  try {
    yield put(setSetupStatus(false));
    const jsonResponse = yield call(
      postData,
      {
        url: DO_INITIAL_SETUP,
        payload: {},
      },
      signal
    );
    if (jsonResponse?.data?.success === true) {
      yield put(setSetupStatus(true));
    } else {
      yield put(setSetUpMessage(jsonResponse?.data?.message));
    }
  } catch (error) {
    console.error(error);
  }
}

function* workerForSearchData(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(postData, {
      url: DO_SEARCH,
      payload: action.payload,
    });
    if (jsonResponse?.data?.success === true) {
      yield put(setUsersData(jsonResponse?.data?.data));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setIsUserGridLoading(false));
  }
}

function* workerForSearchUser(action, signal) {
  try {
    const jsonResponse = yield call(postData, {
      url: FIND_USER,
      payload: action.payload,
    });
    if (jsonResponse?.data?.success === true) {
      yield put(setUserDetails(jsonResponse?.data?.data));
      yield put(setOpenDetails(true));
    } else {
      yield put(setUserDetails({}));
      yield put(setOpenDetails(true));
    }
  } catch (error) {
    console.error(error);
  }
}

function* watcherToSearchUser() {
  yield takeLatest("FIND_USER", workerForSearchUser);
}

function* watcherForInitialSetup() {
  yield takeLatest("DO_INITIAL_SETUP", workerForinitialSetup);
}

function* watcherToSearchData() {
  yield takeLatest("DO_SEARCH", workerForSearchData);
}

export default function* homeSaga() {
  yield all([
    fork(watcherToSearchUser),
    fork(watcherForInitialSetup),
    fork(watcherToSearchData),
  ]);
}
