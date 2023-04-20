const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const config = require('../config/config')
const logger = require('../config/logger')
const userRouter = require('./v1/routes/user.route')

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

app.use('/v1/user', userRouter)
app.listen(config.PORT, () => {
	console.log('Server started on port ' + config.PORT)
})
