const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');


const blogRoutes = require('./routes/blog');


mongoose.connect('mongodb://localhost:27017/ng-blog-app', {
    newUrlParsers: true,
    useUnifiedTopology:true,
})
    .then(() => {
    console.log("Db Connected")
    })
    .catch((err) => {
    console.log(err)
    })

app.use(express.json())
    
// seedDB

app.use(blogRoutes)

app.listen(8080, () => {
    console.log("Server running on port 8080")
})