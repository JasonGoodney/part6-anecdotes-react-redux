import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'

describe('notificationReducer', () => {
  test('returns new state with action CREATE_NOTIFICATION', () => {
    const state = {}
    const action = {
      type: 'CREATE_NOTIFICATION',
      data: {
        message: 'added anecdote'
      }
    }

    deepFreeze(state)
    const newState = notificationReducer(state, action)

    expect(newState).toEqual(action.data)
  })
})
