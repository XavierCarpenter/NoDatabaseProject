const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  artistInfo,
  topTracks,
  artistImage,
  addFavorites,
  getFavorites,
  deleteFav
} = require("./controllers/mainController");
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//app.use(express.static(`${__dirname}/../build`));

//const { getChars } = require(`${__dirname}/controllers/mainController`);

app.get("/api/getTracks", topTracks);
app.get("/api/getArtist", artistInfo);
app.get("/api/getImages", artistImage);
app.post("/api/addFavorite", addFavorites);
app.get("/api/getFavorites", getFavorites);
app.delete("/api/deleteFav/:id", deleteFav);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
