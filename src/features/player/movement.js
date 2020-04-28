import store from "../../config/store";
import {
  SPRITE_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT,
  OBSTACLES,
} from "../../config/constants";

const handleMovement = (player) => {
  const getNewPosition = (oldPosition, direction) => {
    switch (direction) {
      case "LEFT":
        return [oldPosition[0] - SPRITE_SIZE / 2, oldPosition[1]];
      case "RIGHT":
        return [oldPosition[0] + SPRITE_SIZE / 2, oldPosition[1]];
      case "UP":
        return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
      case "DOWN":
        return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
      default:
        return;
    }
  };

  const getSpriteAnimation = (direction) => {
    let count = store.getState().player.frameCount;
    const previousDirection = store.getState().player.direction;

    if (previousDirection === direction) {
      count++;
    }
    if (count > 9) {
      count = 0;
    }
    return count;
  };

  const observeBoundaries = (oldPosition, newPosition) => {
    return (
      newPosition[0] >= 0 &&
      newPosition[0] < MAP_WIDTH &&
      newPosition[1] >= 0 &&
      newPosition[1] < MAP_HEIGHT
    );
  };

  const observeObstacles = (oldPosition, newPosition) => {
    const tiles = store.getState().map.tiles;
    const y = newPosition[1] / SPRITE_SIZE;
    const x = newPosition[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];

    return !OBSTACLES.includes(nextTile);
  };

  const dispatchMove = (direction, newPosition, frameCount) => {
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPosition,
        direction,
        frameCount,
      },
    });
  };

  const attemptMove = (direction) => {
    const oldPosition = store.getState().player.position;
    const newPosition = getNewPosition(oldPosition, direction);
    const frameCount = getSpriteAnimation(direction);
    if (
      observeBoundaries(oldPosition, newPosition) &&
      observeObstacles(oldPosition, newPosition)
    ) {
      dispatchMove(direction, newPosition, frameCount);
    }
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
    switch (event.keyCode) {
      case 37:
        attemptMove("LEFT");
        break;
      case 38:
        attemptMove("UP");
        break;
      case 39:
        attemptMove("RIGHT");
        break;
      case 40:
        attemptMove("DOWN");
        break;
      default:
        return;
    }
  };

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });
  return player;
};

export default handleMovement;
