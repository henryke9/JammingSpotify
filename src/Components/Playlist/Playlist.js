import React from "react";
import Tracklist from "../TrackList/Tracklist";
import "./Playlist.css";

class Playlist extends React.Component {
    render() {
    return (
      
        <div class="Playlist">
    <input value="New Playlist"/>
    <Tracklist />
    <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      
      
    );
  }
}
  export default Playlist;
  