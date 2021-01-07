import { useState } from 'react'
import blogpostAPI from './utils/blogpostAPI'
import blogpostContext from './utils/blogpostContext'

const { createBlogpost, deleteBlogpost } = blogpostAPI

const App = () => {
  const [blogpostState, setBlogpostState] = useState({
    blogpost: '',
    blogposts: [],
  })

  blogpostState.handleInputChange = (event) => {
    setBlogpostState({
      ...blogpostState,
      [event.target.name]: event.target.value,
    })
  }

  blogpostState.handleAppBlogpost = (event) => {
    event.preventDefault()
    let blogposts = JSON.parse(JSON.stringify(blogpostState.blogposts))
    createBlogpost({
      title: blogpostState.title,
      body: blogpostState.body,
    })
      .then(({ data: blogpost }) => {
        blogposts.push(blogpost)
        setBlogpostState({
          ...blogpostState,
          blogposts,
          blogpost: '',
        })
      })
      .catch((err) => console.error(err))
  }

  blogpostState.handleDeleteBlogpost = (id) => {
    let blogposts = JSON.parse(JSON.stringify(blogpostState.blogposts))
    deleteBlogpost(id)
      .then(() => {
        blogposts = blogposts.filter((blogpost) => blogpost._id !== id)
        setBlogpostState({ ...blogpostState, blogposts })
      })
      .catch((err) => console.error(err))
  }
  return <h1>Hello World!</h1>
}

export default App
