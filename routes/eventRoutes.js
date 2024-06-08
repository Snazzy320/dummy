const express = require("express")
const { handleEventUser } = require("../controllers/userCtrl")

const router = express.Router()

router.post("/event", handleEventUser)

module.exports = router