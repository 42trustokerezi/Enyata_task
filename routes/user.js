
module.exports = app => {

    var router = require("express").Router();

    const User = require('../models/user')
    const user = require ('../controllers/user')
    const auth  = require( "../middleware/auth.js")


    //create new user
    router.post("/create", user.create);

    //Retrieve all users
    router.get("/", user.findAll);

    //Retrieve a single user
    router.get("/:id", user.findOne)

    //Update a user with id
    router.put("/:id", user.update)

    //Delete a user
    router.delete("/:id", user.delete)

    app.use('/api/users', router);

    //user signin
   // router.post('/signin', user.signin)
}