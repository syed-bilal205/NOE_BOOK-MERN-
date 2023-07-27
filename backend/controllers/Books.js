const Books = require("../model/Books");
const multer = require("multer");

// TO GET THE ALL THE BOOKS
const getAllTheBooks = async (req, res) => {
  try {
    const category = req.query.category;

    const filter = {};
    if (category) {
      filter.category = category;
    }

    const data = await Books.find(filter);
    res.json(data).status(200);
  } catch (error) {
    res.status(500).json({ Error: "Getting error while fetching books" });
  }
};

// GET THE SINGLE BOOK
const getTheBook = async (req, res) => {
  try {
    const slugParam = req.params.slug;
    const data = await Books.findOne({ slug: slugParam });

    if (!data) {
      throw new Error("An error occurred while fetching a book.");
    }

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

// CREATE THE BOOK

// MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const createTheBook = async (req, res) => {
  try {
    const newBook = new Books({
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.file.filename,
    });

    await Books.create(newBook);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

// UPDATE THE BOOK
const updateTheBook = async (req, res) => {
  try {
    const bookId = req.body.bookId;

    const updateBook = {
      title: req.body.title,
      slug: req.body.slug,
      stars: req.body.stars,
      description: req.body.description,
      category: req.body.category,
    };

    if (req.file) {
      updateBook.thumbnail = req.file.filename;
    }

    await Book.findByIdAndUpdate(bookId, updateBook);
    res.json("Data Submitted");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

// DELETE THE BOOK
const deleteTheBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    await Books.deleteOne({ _id: bookId });
    res.json("How dare you!" + req.body.bookId);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllTheBooks,
  getTheBook,
  createTheBook,
  upload,
  updateTheBook,
  deleteTheBook,
};
