import axios from 'axios'

const BlogpostAPI = {
  getBlogposts: () => axios.get('/api/blogposts'),
  createBlogpost: (blogpost) => axios.post('/api/blogposts', blogpost),
  updateBlogpost: (id, updates) => axios.put(`/api/blogposts/${id}`, updates),
  deleteBlogpost: (id) => axios.delete(`/api/blogposts/${id}`),
}

export default BlogpostAPI
