import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  DO_FREE_SEARCH,
  FETCH_USERS_API,
  FIND_USER,
  FIND_USER_BY_FIRST_NAME,
  FIND_USER_BY_LAST_NAME,
  FIND_USER_BY_SSN,
  USER_API,
} from "../../utils/constants";
import { getData, postData } from "../../utils/service";
import {
  setIsUserDetailsLoading,
  setIsUserGridLoading,
  setOpenDetails,
  setUserApiStatus,
  setUserDetails,
  setUsersData,
} from "../reducer/appSlice";
import { FIRST_NAME_SEARCH, FREE_SEARCH } from "../actionTypes";

function* workerToLoadUsersData(action, signal) {
  try {
    const jsonResponse = yield call(getData, USER_API);
    if (jsonResponse?.data?.success === true) {
      yield put(setUserApiStatus(jsonResponse.data.success));
    }
  } catch (error) {
    console.error(error);
  }
}

function* workerForFetchUsersData(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(getData, FETCH_USERS_API);
    if (jsonResponse?.data?.success === true) {
      yield put(setUsersData(jsonResponse?.data?.data));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setIsUserGridLoading(false));
  }
}

function* workerForFreeSearchData(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(postData, {
      url: DO_FREE_SEARCH,
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

function* workerForFirstNameSearch(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(postData, {
      url: FIND_USER_BY_FIRST_NAME,
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

function* workerForLastNameSearch(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(postData, {
      url: FIND_USER_BY_LAST_NAME,
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

function* workerForSSNSearch(action, signal) {
  try {
    yield put(setIsUserGridLoading(true));
    const jsonResponse = yield call(postData, {
      url: FIND_USER_BY_SSN,
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
    yield put(setIsUserDetailsLoading(true));
    const jsonResponse = yield call(postData, {
      url: FIND_USER,
      payload: action.payload,
    });
    if (jsonResponse?.data?.success === true) {
      yield put(setUserDetails(jsonResponse?.data?.data));
      yield put(setOpenDetails(true));
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put(setIsUserDetailsLoading(false));
  }
}

function* watcherToLoadUsersData() {
  yield takeLatest("LOAD_USERS", workerToLoadUsersData);
}

function* watcherToFetchUsersData() {
  yield takeLatest("FETCH_USERS", workerForFetchUsersData);
}

function* watcherToFreeSearchData() {
  yield takeLatest("FREE_SEARCH", workerForFreeSearchData);
}

function* watcherToFirstNameSearch() {
  yield takeLatest("FIRST_NAME_SEARCH", workerForFirstNameSearch);
}

function* watcherToLastNameSearch() {
  yield takeLatest("LAST_NAME_SEARCH", workerForLastNameSearch);
}

function* watcherToSSNSearch() {
  yield takeLatest("SSN_SEARCH", workerForSSNSearch);
}

function* watcherToSearchUser() {
  yield takeLatest("FIND_USER", workerForSearchUser);
}

export default function* homeSaga() {
  yield all([
    fork(watcherToLoadUsersData),
    fork(watcherToFetchUsersData),
    fork(watcherToFreeSearchData),
    fork(watcherToFirstNameSearch),
    fork(watcherToLastNameSearch),
    fork(watcherToSSNSearch),
    fork(watcherToSearchUser),
  ]);
}
