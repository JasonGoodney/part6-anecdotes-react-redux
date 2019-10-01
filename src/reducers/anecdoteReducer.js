import anecdotesService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'INCREMENT_VOTE':
      const updatedAnecdote = action.data
      // const anecdoteToChange = state.find(a => a.id === id)
      // const changedAnecdote = {
      //   ...anecdoteToChange,
      //   votes: anecdoteToChange.votes + 1
      // }
      return state
        .map(a => (a.id !== updatedAnecdote.id ? a : updatedAnecdote))
        .sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'CREATE_NEW',
      data: newAnecdote
    })
  }
}

export const incrementVotesOf = anecdote => {
  const changedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.update(changedAnecdote)
    console.log('dispatched', updatedAnecdote)
    dispatch({
      type: 'INCREMENT_VOTE',
      data: changedAnecdote
    })
  }
}

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes.sort((a, b) => b.votes - a.votes)
    })
  }
}

export default anecdoteReducer
