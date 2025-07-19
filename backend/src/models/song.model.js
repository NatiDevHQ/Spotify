import mongoose, { mongo } from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: string,
      required: true,
    },
    audioUrl: {
      type: string,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Album",
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

export const Song = mongoose.model("Song", songSchema);
