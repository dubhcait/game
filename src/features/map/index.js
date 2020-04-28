import React from "react";
import getTileSprite from "./getSprite";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";
import "./styles.css";
const MapTile = ({ value }) => (
  <div
    className="tile"
    style={{
      backgroundImage: `url('tiles/img/${getTileSprite(value)}.png')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: `${SPRITE_SIZE}px`,
      height: `${SPRITE_SIZE}px`,
    }}
  ></div>
);

const MapRow = ({ tiles }) => (
  <div className="row">
    {tiles.map((tile) => (
      <MapTile value={tile} />
    ))}
  </div>
);
const Map = ({ tiles }) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "green",
        border: "1px solid black",
        width: "100%",
        height: "100%",
      }}
    >
      {tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tiles: state.map.tiles };
};

export default connect(mapStateToProps)(Map);
