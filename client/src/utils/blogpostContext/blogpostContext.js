import { createContext } from 'react'

const blogpostContext = createContext({
  blogpost: '',
  blogposts: [],
  handleInputChange: () => {},
  handleAddItem: () => {},
  handleUpdateItem: () => {},
  handleDeleteItem: () => {},
})

export default blogpostContext
