const initialState = {}

const notificationReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const setNotification = (text, durationInSeconds) => {
  const durationInMilliseconds = durationInSeconds * 1000
  return dispatch => {
    dispatch(createNotification(text))
    setTimeout(() => {
      dispatch(clearNotification())
    }, durationInMilliseconds)
  }
}

const createNotification = text => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      text
    }
  }
}

const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
    data: initialState
  }
}

export default notificationReducer
