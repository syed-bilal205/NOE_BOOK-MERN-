const router = require("express").Router();
const {
  getAllTheBooks,
  getTheBook,
  createTheBook,
  updateTheBook,
  deleteTheBook,
  upload,
} = require("../controllers/Books");

router.get("/", getAllTheBooks);

router.get("/:slug", getTheBook);

router.post("/", upload.single("thumbnail"), createTheBook);

router.put("/", upload.single("thumbnail"), updateTheBook);

router.delete("/:id", deleteTheBook);

module.exports = router;
