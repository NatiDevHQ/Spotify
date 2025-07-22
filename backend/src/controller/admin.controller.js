import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";

export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({
        message: "please upload all files",
      });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });
    await song.save();

    //if song belong to an album, update the albums song array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song_id },
      });
    }
    res.status(201).json(song);
  } catch (error) {
    console.log("error in creating song", error);
    next(error);
  }
};
