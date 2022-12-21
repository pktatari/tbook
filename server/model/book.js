const { model, Schema } = require("mongoose");

const Book = model(
  "Book",
  Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Book;
