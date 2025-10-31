import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import consultationReducer from './reducers/consultationReducer'
import contactReducer from './reducers/contactReducer'
import rootSaga from './sagas/rootSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine all reducers
const rootReducer = combineReducers({
  consultation: consultationReducer,
  contact: contactReducer,
})

// Create the Redux store with Saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// Run all sagas
sagaMiddleware.run(rootSaga)

// ✅ Export the store directly (not as an object)
export default store
