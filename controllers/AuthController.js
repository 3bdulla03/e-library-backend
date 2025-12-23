const { User } = require('../models')
const middleware = require('../middleware')

const { User } = require('../models')
const { use } = require('react')

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
    const { name, password } = req.body
    const user = await User.findOne({ name })

    let matched = await middleware.comparePassword(
        password,
        user.passwordDigest
    )
    if (matched) {
        let payload = {
            id: user._id,
            name: user.name
        }
        let token = middleware.createToken(payload)
        return res.send({user: payload, token})
    }
    res.status(401).send({status: 'Error', msg: 'unauthorized'})
  } catch (error) {
    console.log(error)
    res.status(401).send({status: 'error', msg: 'error'})
    
  }
}

module.exports = {
  Register,
  Login
}