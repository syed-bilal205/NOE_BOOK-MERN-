const router = require("express").Router();
const {
  getAllTheBooks,
  getTheBook,
  createTheBook,
  upload,
} = require("../controllers/Books");

router.get("/", getAllTheBooks);

router.get("/:slug", getTheBook);

router.post("/", upload.single("thumbnail"), createTheBook);

module.exports = router;
