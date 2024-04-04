const express = require("express");
const authRoute = require("./auth");
const userRoute = require("./users");
const movieRoute = require("./movies");
const listRoute = require("./lists");

const router = express.Router();
router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/list", listRoute);
router.use("/movies", movieRoute);

module.exports = router;
