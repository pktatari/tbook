const { model, Schema } = require("mongoose");

const User = model(
  "User",
  Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
