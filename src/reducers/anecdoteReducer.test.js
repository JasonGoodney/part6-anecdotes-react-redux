import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  test('returns new state with action CREATE_NEW', () => {
    const state = []
    const action = {
      type: 'CREATE_NEW',
      data: {
        content: 'reducers must be immutable',
        votes: 0,
        id: 1
      }
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState.length).toBe(1)
    expect(newState).toContainEqual(action.data)
  })
})
