export const SUBMIT_CONTACT_REQUEST = "SUBMIT_CONTACT_REQUEST"
export const SUBMIT_CONTACT_SUCCESS = "SUBMIT_CONTACT_SUCCESS"
export const SUBMIT_CONTACT_FAILURE = "SUBMIT_CONTACT_FAILURE"
export const RESET_CONTACT = "RESET_CONTACT"

export const submitContact = (formData) => ({
  type: SUBMIT_CONTACT_REQUEST,
  payload: formData,
})

export const submitContactSuccess = (data) => ({
  type: SUBMIT_CONTACT_SUCCESS,
  payload: data,
})

export const submitContactFailure = (error) => ({
  type: SUBMIT_CONTACT_FAILURE,
  payload: error,
})

export const resetContact = () => ({
  type: RESET_CONTACT,
})
