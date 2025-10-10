import React from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
  const { id } = useParams()

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is the content of post #{id} fetched dynamically.</p>
    </div>
  )
}

export default Blog
