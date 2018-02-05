const axios = require("axios");

let artist = [];
let tracks = [];
let favorites = [];
let images = [];
const apiRoot = "http://ws.audioscrobbler.com";
const apiKey = "";

const artistInfo = (req, res, next) => {
  axios
    .get(
      `${apiRoot}/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
    )
    .then(response => {
      artist.push(response.data.artists.artist);
      // console.log(artist);
      res.json(artist);
    })
    .catch(console.log);
};
const artistImage = (req, res, next) => {
  axios
    .get(
      `${apiRoot}/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`
    )
    .then(response => {
      images.push(response.data.artists.artist.image[1]);
      // console.log(images);
      res.json(images);
    })
    .catch(console.log);
};

const topTracks = (req, res, next) => {
  axios
    .get(
      `${apiRoot}/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`
    )
    .then(response => {
      tracks.push(response.data.tracks.track);
      //   console.log(tracks);
      res.json(tracks);
    })
    .catch(console.log);
};
// Add coins to user tracker
const addFavorites = (req, res, next) => {
  // add object to array, limit to 25, make sure it's not already in array
  //   if (
  //     !artist.filter(artist => artist.name === req.body.name)[0]
  //   ) {
  //     favorites.push(req.body);
  //   } else {
  //     return res.json({ message: `You've already added ${req.body.name} to your favorites.` });
  //   }
  //   // check if the coin was added successfully and send a message back
  //   if (favorites[favorites.length - 1].name)
  //     res.json({ message: `${userCoins[userCoins.length - 1].name} Tracked!` });
  //   else
  //     // otherwise send an error
  //     res.status(500).json({
  //       message:
  //         userCoins.length === 25
  //           ? "You May Only Track 25 Coins At A Time"
  //           : "Failed To Add Coin"
  //     });

  favorites.push(req.body.favItem);
  console.log(favorites);
};
const getFavorites = (req, res, next) => {
  res.json(favorites);
};
const deleteFav = (req, res, next) => {
  const { id } = req.params;
  favorites.splice(id, 1);
  res.json(favorites);
};

module.exports = {
  artistInfo,
  artistImage,
  topTracks,
  addFavorites,
  getFavorites,
  deleteFav
};
