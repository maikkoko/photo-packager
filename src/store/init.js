/*
 * CREDS REDUCER
 * Authentication token and login state
 */

// ------------------------------------
// Constants
// ------------------------------------
const SET_PROFILE = 'creds/SET_PROFILE'
const SET_AUTH = 'creds/SET_AUTH'
const CLEAR_CREDENTIALS = 'creds/CLEAR_CREDENTIALS'
const LOGOUT_REQUESTED = 'creds/LOGOUT_REQUESTED'
const LOGIN_REQUESTED = 'creds/LOGIN_REQUESTED'

// ------------------------------------
// Actions
// ------------------------------------
export function clearCredentials() {
  return {
    type: CLEAR_CREDENTIALS
  }
}

export function setProfile(profile) {
  return {
    type: SET_PROFILE,
    payload: profile
  }
}

export function setAuthDetails(auth) {
  return {
    type: SET_AUTH,
    payload: auth
  }
}

export const requestLogout = () => {
  return {
    type: LOGOUT_REQUESTED
  }
}

export const toggleLoginRequest = isLoggingIn => {
  return {
    type: LOGIN_REQUESTED,
    payload: isLoggingIn
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  auth: null,
  profile: null,
  isLoggingOut: false,
  isLoggingIn: false
}

export default function credsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload }

    case SET_AUTH:
      return { ...state, auth: action.payload }

    case CLEAR_CREDENTIALS:
      return { ...state, profile: null, auth: null }

    case LOGOUT_REQUESTED:
      return { ...state, isLoggingOut: true }

    case LOGIN_REQUESTED:
      return { ...state, isLogginIn: action.payload }

    default:
      return state
  }
}
