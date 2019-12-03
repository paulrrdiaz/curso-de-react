import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ pageContext }) => {
  const { title, body } = pageContext

  return <div>
    <h1>{title}</h1>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
}