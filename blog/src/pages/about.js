import React from 'react'
import Helmet from 'react-helmet'
import Main from '../layouts/Main'

export default () => {
  return (
    <Main>
      <Helmet title="About" />
      <h1>About</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate impedit, in amet velit explicabo cumque distinctio dicta modi natus ex a quibusdam ipsam, voluptates voluptatem excepturi! Nobis tempora commodi amet?
      </div>
    </Main>
  )
}