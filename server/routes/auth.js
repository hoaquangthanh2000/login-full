const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/resgister", authController.registerUser);
