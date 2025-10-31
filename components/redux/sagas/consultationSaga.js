import { call, put, takeEvery } from "redux-saga/effects";
import {
  SUBMIT_CONSULTATION_REQUEST,
  submitConsultationSuccess,
  submitConsultationFailure,
} from "../actions/consultationActions";

// ✅ Automatically switch between local + production API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://loopera-tech.onrender.com";


function* submitConsultationSaga(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/api/consultation`, {
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
    });

    const data = yield call([response, response.json]);

    if (!response.ok) {
      throw new Error(data.message || "Failed to send consultation request");
    }

    // ✅ If backend returns success
    yield put(submitConsultationSuccess(data));
    console.log("✅ Consultation form submitted successfully:", data);
  } catch (error) {
    console.error("❌ Consultation form submission failed:", error);
    yield put(submitConsultationFailure(error.message));
  }
}

export function* consultationSaga() {
  yield takeEvery(SUBMIT_CONSULTATION_REQUEST, submitConsultationSaga);
}
