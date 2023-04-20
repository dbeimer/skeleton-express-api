// eslint-disable-next-line no-unused-vars
const { request, response } = require('express')
const UserService = require('../services/user.service')

const userService = new UserService()

/**
 * @param {request} req
 * @param {response} res
 */
async function getUsers(req, res) {
	const users = userService.getUsers()
	return res.send({ success: true, data: users })
}

module.exports = { getUsers }
