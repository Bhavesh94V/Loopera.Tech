import { call, put, takeEvery } from "redux-saga/effects"
import { SUBMIT_CONTACT_REQUEST, submitContactSuccess, submitContactFailure } from "../actions/contactActions"

function* submitContactSaga(action) {
  try {
    const response = yield call(fetch, "https://loopera-tech.onrender.com/api/contact", {
      // const response = yield call(fetch, "http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: action.payload.name,
          email: action.payload.email,
          company: action.payload.company,
          services: action.payload.services,
          details: action.payload.details,
          contactMode: action.payload.contactMode,
          phoneNumber: action.payload.phoneNumber,
          preferredEmail: action.payload.preferredEmail,
          meetingLink: action.payload.meetingLink,
        }),
      })

    const data = yield call([response, response.json])

    if(data.success) {
        yield put(submitContactSuccess(data))
  } else {
    yield put(submitContactFailure(data.error))
  }
} catch (error) {
  yield put(submitContactFailure(error.message))
}
}

export function* contactSaga() {
  yield takeEvery(SUBMIT_CONTACT_REQUEST, submitContactSaga)
}
