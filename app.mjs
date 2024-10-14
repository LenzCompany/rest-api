
//yy
import __path from 'path'
//var favicon = require('serve-favicon');
import express from 'express'
import cors from 'cors'
import secure from 'ssl-express-www'
const PORT = process.env.PORT || 9090

import mainrouter from './routes/main.js'
import apirouter from './routes/api.mjs'

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(PORT)
export default app
