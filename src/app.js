const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('../config/config')

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Welcome to my API')
})

app.post('/user', (req, res) => {
	res.send({ success: true, message: 'User created successfully' })
})

app.listen(config.PORT, () => {
	console.log('Server started on port ' + config.PORT)
})
