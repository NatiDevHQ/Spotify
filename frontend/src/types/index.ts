export interface Song {
  _id: string;
  title: string;
  artist: string;
  albumId: string | null;
  duration: number;
  imageUrl: string;
  audioUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Album {
  _id: string;
  title: string;
  artist: string;
  releaseYear: number;
  imageUrl: string;
  songs: Song[];
}
