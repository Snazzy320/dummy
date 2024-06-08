const express = require("express")
const { handleAddUser } = require("../controllers/userCtrl")

const router = express.Router()

router.post("/add-user", handleAddUser)
router.post("/add-new", handleAddUser)

module.exports = router