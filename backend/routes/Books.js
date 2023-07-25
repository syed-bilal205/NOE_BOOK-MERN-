const router = require("express").Router();
const { getAllTheBooks, getTheBook } = require("../controllers/Books");

router.get("/", getAllTheBooks);

router.get("/:slug", getTheBook);

module.exports = router;
