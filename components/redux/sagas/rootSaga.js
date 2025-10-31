import { fork } from "redux-saga/effects"
import { consultationSaga } from "./consultationSaga"
import { contactSaga } from "./contactSaga"

export default function* rootSaga() {
  yield fork(consultationSaga)
  yield fork(contactSaga)
}
