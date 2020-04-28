const initialState = {
  position: [0, 180],
  spriteAnimation: "Idle_000",
  direction: "None",
  frameCount: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return { ...action.payload };
    default:
      return state;
  }
};

export default playerReducer;
