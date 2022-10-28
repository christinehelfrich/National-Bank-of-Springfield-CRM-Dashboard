import logo from './logo.svg'
import './style.css'
import { Link } from 'react-router-dom'

export function EditPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App-line" />

      <section className="App-main">
        <Link to="/" className="App-link">
          Home Page
        </Link>
      </section>
    </div>
  )
}
