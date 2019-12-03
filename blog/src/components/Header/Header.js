import React from 'react'
import { Link } from 'gatsby'
import { Header } from './styles'

export default () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}