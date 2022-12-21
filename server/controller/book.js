const Book = require("../model/book");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const publish = async (req, res) => {
  try {
    let keys = Object.keys(req.body);
    keys.forEach((item) => {
      if (!req.body[item])
        return res.status(400).json({
          msg: `${item} is empty`,
        });
    });
    const book = await Book.create(req.body, { new: true });
    return res.status(200).json({
      msg: "Success!",
      book,
    });
  } catch (err) {
    res.status(400).json({
      msg: `Book publication failed${err}`,
    });
  }
};

const get_list = async (req, res) => {
  try {
    const articles = await Book.find({});
    return res.status(200).json({
      articles,
    });
  } catch (error) {
    res.status(400).json({
      msg: `No book found ${err}`,
    });
  }
};
const get = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById({
      _id: id,
    });
    return res.status(200).json({
      book,
    });
  } catch (err) {
    res.status(400).json({
      msg: `No book found ${err}`,
    });
  }
};
module.exports = {
  publish,
  get_list,
  get,
};
