const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// GET
/*
router.get("/home", controller.showHome);
router.get("/whoarewe", controller.showWhoAreWe);
router.get("/wherearewe", controller.showWhereAreWe);
router.get("/whatdowedo", controller.showWhatDoWeDo);
router.get("/contact", controller.showContact);
*/

// "showPageFromParams()" shows you the view of the "params";
router.get("/:page", controller.showPageFromParams);

module.exports = router;