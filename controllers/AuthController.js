const middleware = require("../middleware")
const User = require("../models/user")
const Register = async (req, res) => {
  try {
    const { name, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ name })
    if (existingUser) {
      return res
        .status(400)
        .send({ status: "Error", msg: "This user already exists" })
    }
    const user = await User.create({ name, passwordDigest })
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: "Error", msg: "Registration failed" })
  }
}
const Login = async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (!user) {
      return res.status(401).send({ status: "Error", msg: "User not found" })
    }
    let matched = await middleware.comparePassword(
      password,
      user.passwordDigest
    )
    if (matched) {
      let payload = {
        id: user._id,
        name: user.name,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Invalid password" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "error", msg: "Login error" })
  }
}
const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
module.exports = {
  Register,
<<<<<<< HEAD
  Login
=======
  Login,
  CheckSession,
>>>>>>> f4be744 (finished auth)
}
