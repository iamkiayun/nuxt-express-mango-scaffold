const {Nuxt, Builder} = require('nuxt')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const blogRoutes = require('./routes/blogRouter')
const app = express()
const port = process.env.PORT || 3000


//create a project at mongodb and paste the url of the connection here
const dbURI = ''

let config = require('../nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('tiny'))
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log('connected to database')
    app.listen(port)
    console.log(`app listening to port ${port}`)
  })
  .catch((err) => console.log(err))

app.use('/blogs', blogRoutes)
app.use(nuxt.render)



