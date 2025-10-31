import {
  SUBMIT_CONSULTATION_REQUEST,
  SUBMIT_CONSULTATION_SUCCESS,
  SUBMIT_CONSULTATION_FAILURE,
  RESET_CONSULTATION,
} from "../actions/consultationActions"

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}

export default function consultationReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CONSULTATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SUBMIT_CONSULTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      }
    case SUBMIT_CONSULTATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RESET_CONSULTATION:
      return initialState
    default:
      return state
  }
}
