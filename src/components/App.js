import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./Cards/Cards.js"
import Header from "./Header/Header.js";
import Favorites from "./Favorites/Favorites.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: [],
      songs: [],
      images: [],
      trackActive: false,
      artistActive: false,
      home: true,
      favorites: false
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.showArtist = this.showArtist.bind(this);
    this.showTracks = this.showTracks.bind(this);
  }
  handleViewChange(val) {
    if (this.state[val]) return;

    switch (val) {
      case "home":
        this.setState({ home: true, favorites: false });
        break;
      case "favorites":
        this.setState({ home: false, favorites: true });
        break;
      default:
        return;
    }
  }
  componentDidMount(){
let tempArr = [];
tempArr.push(this.state.artist[0])
this.setState({images: tempArr})
console.log(this.state.images);

  }
  showArtist() {
    axios.get("/api/getArtist").then(response => {
      // console.log(response.data);
      this.setState({ artist: response.data[0] });
      console.log(this.state.artist);
    });
    this.setState({ trackActive: false, artistActive: true });
  }
  showTracks() {
    axios.get("/api/getTracks").then(response => {
      // console.log(response.data);
      this.setState({ songs: response.data[0] });
    });
    this.setState({ trackActive: true, artistActive: false });
  }

  render() {
    // console.log(this.state.artistActive, this.state.trackActive);

    const changeView = event =>
      this.handleViewChange(event.target.innerText.toLowerCase());
    return (

      <div className="App">
      <Header viewChange={changeView} />
        <h1 className="App-intro">
          Check out some of the top <span className="keyWord">Artist</span> and{" "}
          <span className="keyWord">Songs</span>
        </h1>
        <button className="btn" onClick={this.showArtist} >
          See top Artist
        </button>
        <button className="btn" onClick={this.showTracks}>
          See top Songs
        </button>
        {this.state.favorites && <Favorites />}
        <div className="card-box">
          {this.state.artistActive && this.state.artist.map((obj, index) => {
            let artistName = obj.name;
            let artistPlayCount = obj.playcount;
            let artistListeners = obj.listeners;
            
            return (
              this.state.home && <Cards
                name={artistName}
                playcount={artistPlayCount}
                listeners={artistListeners}
                
                
              />
            );
          })}
          
        </div>
        <div className="card-box">
          {this.state.trackActive && this.state.songs.map((obj, index) => {
            let songName = obj.name;
            let songPlayCount = obj.playcount;
            let songListeners = obj.listeners;
            
            return (
              this.state.home && 
              <Cards
                name={songName}
                playcount={songPlayCount}
                listeners={songListeners}
              />
            );
          })}
          
        </div>
        
      </div>
    );
  }
}

export default App;
