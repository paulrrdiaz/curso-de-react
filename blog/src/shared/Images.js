import { graphql } from 'gatsby'

const Images = graphql`
  query {
    file(relativePath: { eq: "assets/images/hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`



console.log(Images, 'images');


exports = {
  Images: true,
}