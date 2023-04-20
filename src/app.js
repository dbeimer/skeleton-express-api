const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const config = require('../config/config')
const logger = require('../config/logger')

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
	logger.info(`${req.method} ${req.url}`)
	next()
})

app.get('/', (req, res) => {
	res.send('Welcome to my API')
})

app.post('/user', (req, res) => {
	logger.info({ ...req.body })
	res.send({ success: true, message: 'User created successfully' })
})

app.listen(config.PORT, () => {
	console.log('Server started on port ' + config.PORT)
})
