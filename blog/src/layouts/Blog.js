import React from 'react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from 'react-helmet'

export default ({ pageContext }) => {
  const { title, body } = pageContext;

  return (
    <>
      <Helmet title={title} />
      <div>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </>
  );
}