const express = require("express");
const { login, dashboard } = require("../controllers/main");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.get("/api/v1/dashboard", authMiddleware, dashboard);
router.post("/api/v1/login", login);

module.exports = router;
