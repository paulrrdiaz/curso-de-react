import React from 'react'
import Helmet from 'react-helmet'
import Main from '../layouts/Main'
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data, 'data');
  const { fixed } = data.file.childImageSharp
  
  return (
    <Main>
      <Helmet title="Home" />
      <h1>Hi Gatsby</h1>
      <div>
        <Img fixed={fixed} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate impedit, in amet velit explicabo cumque distinctio dicta modi natus ex a quibusdam ipsam, voluptates voluptatem excepturi! Nobis tempora commodi amet?
      </div>
    </Main>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 600, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`