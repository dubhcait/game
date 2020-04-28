import React from "react";
import Player from "../player";
import Map from "../map";

import { MAP_HEIGHT, MAP_WIDTH } from "../../config/constants";
import tiles from "../../data/map/1";
import store from "../../config/store";

const World = ({ children }) => {
  store.dispatch({ type: "ADD_TILES", payload: { tiles } });
  return (
    <div
      className="map"
      style={{
        position: "relative",
        height: MAP_HEIGHT,
        width: MAP_WIDTH,
        margin: "auto",
      }}
    >
      <Map />
      <Player />
    </div>
  );
};

export default World;
