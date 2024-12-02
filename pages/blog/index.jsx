import React from 'react'
import BlogPage from '../../components/masterBlog/BlogPage'
import PageTitle from '../../components/masterBlog/PageTitle'

const index = () => {
  return (
    <div>
      <div>
        <PageTitle/>
      </div>
      <div>
        <BlogPage/>
      </div>
    </div>
  )
}

export default index
