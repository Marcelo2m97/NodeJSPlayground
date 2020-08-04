const express = require("express")
const router = express.Router()
const testController = require("../../controllers/api/test")

router.get("/data", testController.getData)
router.get("/data/Marcelo", testController.getMarcelo)
router.get("/data/Andre", testController.getAndre)
router.get("/data/teapot", testController.statusTest)

router.get("/", testController.getMethod)
router.post("/", testController.postMethod)
router.put("/", testController.putMethod)
router.patch("/", testController.patchMethod)
router.delete("/", testController.deleteMethod)

module.exports = router