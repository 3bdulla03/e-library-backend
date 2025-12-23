const { User } = require('../models')
const middleware = require('../middleware')

const { User } = require('../models')

const Register = async (req, res) => {
  try {
    const {name, password} = req.body
    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.exists({ name })
    if (existingUser) {
        return res.status(400).send("This user is existed")
    }
    else {
        const user = await User.create({ name, passwordDigest })
        res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {

  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login
}
