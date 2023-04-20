const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

const environment = process.env.NODE_ENV || 'development'
if (!fs.existsSync(`.env.${environment}`)) {
	throw new Error(`.env.${environment} does not exist in the root directory`)
}

const envConfig = dotenv.parse(fs.readFileSync(`.env.${environment}`))

for (const k in envConfig) {
	process.env[k] = envConfig[k]
}

module.exports = {
	PORT: process.env.APP_PORT ?? 3000,
}
