const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    author: {
        type: 'string',
        required: true
    },
    img: {
        type: 'string',
    },
    content: {
        type:"string",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
 
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog;