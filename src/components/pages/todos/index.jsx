import './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'
import { reset, retrieveTodos } from '@/store/todosSlice'

import React from 'react'

export function Todos() {
  const dispatch = useDispatchHook()
  const count = useAppSelector(state => state.todos.count)
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Dos</h1>
      </header>

      <div className="App-line">
        <section className="App-main">
          <Button onClick={() => dispatch(retrieveTodos())}>
            Retrieve Todos
          </Button>
          <Button onClick={() => dispatch(reset())}>Reset Todos</Button>
          <p>Todos Count: {count}</p>
          <Link to="/" className="App-link">
            Home
          </Link>
        </section>
      </div>
    </div>
  )
}
