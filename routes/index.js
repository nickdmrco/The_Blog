const router = require('express').Router()
const { Blogpost } = require('../models')

router.get('/blogposts', (req, res) => {
  Blogpost.find()
    .then((blogposts) => res.json(blogposts))
    .catch((err) => console.log(err))
})

router.post('/blogposts', (req, res) => {
  Blogpost.create(req.body)
    .then((blogpost) => res.json(blogpost))
    .catch((err) => console.log(err))
})

router.put('/blogposts', (req, res) => {
  Blogpost.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
})

router.delete('/blogposts/:id',(req,res)=>{
  Blogpost.findByIdAndDelete(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
})
module.exports = router
