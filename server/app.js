// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here

app.use(express.json());
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

 

// GET /artist/:artistId
app.get('/artists/:artistId', (req, res) => {
  const artistId = Number(req.params.artistId);
  const artist = getArtistByArtistId(artistId);
  if (!artist) {
    res.status(404).json({ message: "Artist not found"});
  }
  res.json(artist);
});

// GET /artists
app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.json(artists);
});

// POST /artist
app.post("/artists", (req, res) => {
  const newArtist = addArtist(req.body);
  res.status(201).json(newArtist);
});

// PUT /artists/:artistId
app.put("/artists/:artistId", (req, res) => {
  const artistId = Number(req.params.artistId);
  const editedArtist = editArtistByArtistId(artistId, req.body);
  if(!editedArtist){
    res.status(404).json({ message: "Artist not found" });
  }
  res.json(editedArtist);
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}