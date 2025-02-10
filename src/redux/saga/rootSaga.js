import { all, fork } from "redux-saga/effects";
import * as homeSaga from "./homeSaga";

export default function* rootSaga() {
  yield all([...Object.values(homeSaga)].map(fork));
}
