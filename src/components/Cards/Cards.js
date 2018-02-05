import React, { Component } from "react";
import axios from "axios";
import "./Cards.css";
 

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      artistPlayCount: this.props.playcount,
      artistListeners: this.props.listeners,
      image: this.props.image,
      tracks: [],
      trackPlayCount: [],
      trackListeners: []
    };
    this.addFavorites = this.addFavorites.bind(this);
  }
  addFavorites(){
    let favObj = {
      name: this.state.name,
      playCont: this.state.artistPlayCount,
      listeners: this.state.artistListeners,
     

    }
    axios.post('/api/addFavorite', {favItem: favObj})
     alert("added to favorites");
  }

  render() {
    return (
      <div className="cards" onClick={() => this.addFavorites()}>
         <h1>{this.state.name}</h1>
         <h3>Playcount: {this.state.artistPlayCount}</h3>
         <h3>Listeners: {this.state.artistListeners}</h3>
         <img src={this.state.image} />
      </div>
    );
  }
}

  export default Cards;