import {
  SUBMIT_CONTACT_REQUEST,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_FAILURE,
  RESET_CONTACT,
} from "../actions/contactActions"

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SUBMIT_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      }
    case SUBMIT_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RESET_CONTACT:
      return initialState
    default:
      return state
  }
}
