const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')

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

app.listen(3000, () => {
	console.log('Server started on port 3000')
})
