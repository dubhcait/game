import {
  Idle_000,
  Run_000,
  Run_001,
  Run_002,
  Run_003,
  Run_004,
  Run_005,
  Run_006,
  Run_007,
  Run_008,
  Run_009,
  Climb_000,
  Climb_001,
  Climb_002,
  Climb_003,
  Climb_004,
  Climb_005,
  Climb_006,
  Climb_007,
  Climb_008,
  Climb_009,
  Jump_000,
  Jump_001,
  Jump_002,
  Jump_003,
  Jump_004,
  Jump_005,
  Jump_006,
  Jump_007,
  Jump_008,
  Jump_009,
} from "./img";
import store from "../../config/store";

const getSprite = () => {
  const frameCount = store.getState().player.frameCount;
  const direction = store.getState().player.direction;

  if (direction === "DOWN") {
    return jump(frameCount);
  } else if (direction === "UP") {
    return climb(frameCount);
  } else if (direction === "LEFT" || direction === "RIGHT") {
    return run(frameCount);
  } else {
    return Idle_000;
  }
};

const run = (frameCount) => {
  switch (frameCount) {
    case 0:
      return Run_000;
    case 1:
      return Run_001;
    case 2:
      return Run_002;
    case 3:
      return Run_003;
    case 4:
      return Run_004;
    case 5:
      return Run_005;
    case 6:
      return Run_006;
    case 7:
      return Run_007;
    case 8:
      return Run_008;
    case 9:
      return Run_009;
    default:
      return Idle_000;
  }
};

const climb = (frameCount) => {
  switch (frameCount) {
    case 0:
      return Climb_000;
    case 1:
      return Climb_001;
    case 2:
      return Climb_002;
    case 3:
      return Climb_003;
    case 4:
      return Climb_004;
    case 5:
      return Climb_005;
    case 6:
      return Climb_006;
    case 7:
      return Climb_007;
    case 8:
      return Climb_008;
    case 9:
      return Climb_009;
    default:
      return Idle_000;
  }
};

const jump = (frameCount) => {
  switch (frameCount) {
    case 0:
      return Jump_000;
    case 1:
      return Jump_001;
    case 2:
      return Jump_002;
    case 3:
      return Jump_003;
    case 4:
      return Jump_004;
    case 5:
      return Jump_005;
    case 6:
      return Jump_006;
    case 7:
      return Jump_007;
    case 8:
      return Jump_008;
    case 9:
      return Jump_009;
    default:
      return Idle_000;
  }
};
export default getSprite;
