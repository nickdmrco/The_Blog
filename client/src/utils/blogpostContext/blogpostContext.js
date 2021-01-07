import { createContext } from 'react'

const blogpostContext = createContext({
  blogpost: '',
  blogposts: [],
  handleInputChange: () => {},
  handleAddBlogpost: () => {},
  handleUpdateBlogpost: () => {},
  handleDeleteBlogpost: () => {},
})

export default blogpostContext
