var express = require('express')
var router = express.Router()

/* GET users listing. */
const users = require('../data/users.json')

router.get('/', function (req, res, next) {
  console.log(users)
  res.json({ user: users[0] })
})

module.exports = router
