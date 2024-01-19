const routes = require("express").Router();
const apiRoutes = require("./api")

routes.use("/users". apiRoutes)



module.exports = routes