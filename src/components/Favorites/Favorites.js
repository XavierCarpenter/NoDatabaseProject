import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header.js";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemName: [],
      itemPlayCount: "",
      itemListeners: ""
    };
    this.deleteBtn = this.deleteBtn.bind(this);
  }
  componentDidMount() {
    axios.get("/api/getFavorites").then(response => {
      console.log(response.data);
      this.setState({ items: response.data });
    });
  }
  deleteBtn(val) {
      console.log(val)
    axios.delete(`/api/deleteFav/${val}`).then(response => {
        this.setState({items: response.data});
        alert("Deleted from favorites");
    })
    .catch(err => alert(err.message));
  }

  render() {
    console.log(this.state.items);
    let mappedFav = this.state.items.map((obj, index) => {
      return (
        <div key={index} className="cards">
          <h1>{obj.name}</h1>
          <h3>Playcount: {obj.playcont}</h3>
          <h3>Listeners: {obj.listeners}</h3>
          <button className="delete-btn" onClick={() => this.deleteBtn(index)}>
            delete from favorites
          </button>
        </div>
      );
    });
    return (
      <div className="">
        <h1 className="Favorites-intro">Your Favorites</h1>
        {/* <div className="cards">
        <h1>{this.state.itemName}</h1>
        <h3>Playcount: {this.state.itemPlayCount}</h3>
        <h3>Listeners: {this.state.itemListeners}</h3>
        <img src={this.state.image} />
        </div> */}
        {mappedFav}
      </div>
    );
  }
}

export default Favorites;
