export const SUBMIT_CONSULTATION_REQUEST = "SUBMIT_CONSULTATION_REQUEST"
export const SUBMIT_CONSULTATION_SUCCESS = "SUBMIT_CONSULTATION_SUCCESS"
export const SUBMIT_CONSULTATION_FAILURE = "SUBMIT_CONSULTATION_FAILURE"
export const RESET_CONSULTATION = "RESET_CONSULTATION"

export const submitConsultation = (formData) => ({
  type: SUBMIT_CONSULTATION_REQUEST,
  payload: formData,
})

export const submitConsultationSuccess = (data) => ({
  type: SUBMIT_CONSULTATION_SUCCESS,
  payload: data,
})

export const submitConsultationFailure = (error) => ({
  type: SUBMIT_CONSULTATION_FAILURE,
  payload: error,
})

export const resetConsultation = () => ({
  type: RESET_CONSULTATION,
})
