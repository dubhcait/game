const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return;
    case 1:
      return "container_with_thing";
    case 2:
      return "switch_off";
    case 3:
      return "container_with_uranium";
    case 4:
      return "light2";
    case 5:
      return "switch_on";
    case 6:
      return "tile_wall";
    case 7:
      return "crate";
    case 8:
      return "light_hanging";
    case 9:
      return "tile1";
    case 10:
      return "tile_brushed_metal";
    case 11:
      return "tile_brushed_metal_reflective";
    case 12:
      return "resupply1";
    case 13:
      return "tile_dark_window";
    case 14:
      return "tile_rock";
    case 15:
      return "tile_window";
    case 16:
      return "fence_base";
    case 17:
      return "tile_rock_brown";
    case 18:
      return "uranium1";
    case 19:
      return "fence_box";
    case 20:
      return "sandbags";
    case 21:
      return "ground_gun";
    case 22:
      return "key_card_needed_box";
    case 23:
      return "spikes_down";
    case 24:
      return "tile_slate";
    default:
      return;
  }
};

export default getTileSprite;
