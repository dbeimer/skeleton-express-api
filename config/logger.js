const winston = require('winston')
const { combine, timestamp, printf } = winston.format

// Formatos del registro
const logFormat = printf(({ level, message, timestamp }) => {
	if (message instanceof Object) message = JSON.stringify(message, null, 2)
	return `${timestamp} ${level}: ${message}`
})

// creando logger de winston
module.exports = winston.createLogger({
	level: 'info',
	format: combine(timestamp(), logFormat),
	transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'logs/app.log' })],
})
