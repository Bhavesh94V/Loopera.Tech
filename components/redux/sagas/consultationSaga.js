import { call, put, takeEvery } from "redux-saga/effects"
import {
  SUBMIT_CONSULTATION_REQUEST,
  submitConsultationSuccess,
  submitConsultationFailure,
} from "../actions/consultationActions"

function* submitConsultationSaga(action) {
  try {
    const response = yield call(fetch, "http://localhost:5000/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: action.payload.name,
        email: action.payload.email,
        company: action.payload.company,
        phone: action.payload.phone,
        service: action.payload.projectType,
        budget: action.payload.budget,
        timeline: action.payload.timeline,
        projectDetails: action.payload.description,
        callTime: action.payload.preferredTime,
        contactMethod: action.payload.contactMethod,
      }),
    })

    const data = yield call([response, response.json])

    if (data.success) {
      yield put(submitConsultationSuccess(data))
    } else {
      yield put(submitConsultationFailure(data.error))
    }
  } catch (error) {
    yield put(submitConsultationFailure(error.message))
  }
}

export function* consultationSaga() {
  yield takeEvery(SUBMIT_CONSULTATION_REQUEST, submitConsultationSaga)
}
