import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  projectDate: {
    type: Date,
    default: Date.now(),
  },
  client: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  collaborators: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    { timestamps: true },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
