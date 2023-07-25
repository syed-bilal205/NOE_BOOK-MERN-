const Books = require("../model/Books");

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

module.exports = {
  getAllTheBooks,
  getTheBook,
};
