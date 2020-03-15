const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const queries = require('./routes/api/queries')

app.use('/api/queries', queries)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server running at ${port}`))