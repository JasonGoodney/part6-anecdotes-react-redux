const initialState = {}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const createNotification = message => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: {
      message
    }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: initialState
  }
}

export default notificationReducer
