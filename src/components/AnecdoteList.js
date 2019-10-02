import React from 'react'
import { connect } from 'react-redux'
import { incrementVotesOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const vote = anecdote => () => {
    props.incrementVotesOf(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} <button onClick={vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

/// Selector function
const anecdotesToShow = ({ anecdotes, filter }) => {
  if (!filter) {
    return anecdotes
  }
  console.log('anecdotesToShow', anecdotes)
  return anecdotes.filter(a => a.content.includes(filter))
}

const mapStateToProps = state => {
  console.log(state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  incrementVotesOf,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
