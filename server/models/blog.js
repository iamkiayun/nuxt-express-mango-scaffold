const mongoose = require('mongoose')
const Schema = mongoose.Schema


//create new schema object ('class in python')
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})


const Blog = mongoose.model('Blog', blogSchema)

const array = []

const kenKen = ()=> console.log('kenKen')

module.exports = {
    Blog,
    array,
    kenKen
}


// module.exports = Blog