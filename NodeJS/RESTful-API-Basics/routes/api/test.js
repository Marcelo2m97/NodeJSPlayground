const express = require("express")
const router = express.Router()
const testController = require("../../controllers/api/test")

router.get("/data", testController.getData)
router.get("/data/Marcelo", testController.getMarcelo)
router.get("/data/Andre", testController.getAndre)
router.get("/data/teapot", testController.statusTest)

module.exports = router