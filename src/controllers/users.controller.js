const { userValidator } = require("../validators/user.validator")

const users = [
  {
    name: 'John',
    sex: 'male',
    age: 46,
    password: "password1"
  },
  {
    name: 'Anne',
    sex: 'female',
    age: 78,
    password: "password1"
  },
  {
    name: 'Prosper',
    sex: 'male',
    age: 42,
    password: "password1"
  },
  {
    name: 'Ada',
    sex: 'female',
    age: 19,
    password: "password1"
  }
]

class UserController {

  static  createNewUser(req, res){
    const { error, value } =  userValidator.validate(req.body)
    if(error) throw new Error(error.details[0].message)

    // const userKeys = Object.keys(users[0])
    // const clientUserKeys = Object.keys(req.body)
    // if(clientUserKeys.length < userKeys.length) throw new Error("Incomplete user object")
    // for (const key of clientUserKeys){
    //   if(!userKeys.includes(key)) throw new Error(`${key.toLocaleUpperCase()} is not a valid user key`)

    //   if(typeof users[0][key] !== typeof req.body[key])  throw new Error(`Invalid key @ ${key}, should be type of ${typeof  users[0][key]}`)
    // }
    users.push(value)
    res.status(201).json({
      mmessage: "User created successfully",
      status: 'Success',
      data: {
        users
      }
    })
  }

}

module.exports = UserController 