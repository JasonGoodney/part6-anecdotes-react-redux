import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  createNotification,
  removeNotification
} from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteForm = props => {
  const addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)

    props.createNotification(`added '${content}'`)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
  }

  return (
    <div>
      <Filter />
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>{' '}
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
  removeNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
