const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    description: String,
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "email address is required"],
      match: [/\S+@\S+\.\S+/, "not a valid email address"],
      index: true,
    },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    image: String,
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
