import React from "react";
import { connect } from "react-redux";
import handleMovement from "./movement";
import { SPRITE_SIZE } from "../../config/constants";
import getSprite from "./animation";

const Player = ({ position, direction }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: position[1],
        left: position[0],
        backgroundImage: `url('${getSprite()}')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: `${SPRITE_SIZE}px`,
        height: `${SPRITE_SIZE}px`,
        transform: `${direction === "LEFT" ? "scaleX(-1)" : "scaleX(1)"}`,
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.player,
  };
};

export default connect(mapStateToProps)(handleMovement(Player));
