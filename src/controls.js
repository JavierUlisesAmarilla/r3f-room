export const controls = {
  roomWidth: { value: 5, label: 'Room Width' },
  roomHeight: { value: 5, label: 'Room Height' },
  roomLength: { value: 5, label: 'Room Length' },
  wallUrl: {
    value: 'textures/walls/(7).png', options: {
      "Wall 1": "textures/walls/(1).png",
      "Wall 2": "textures/walls/(2).png",
      "Wall 3": "textures/walls/(3).png",
      "Wall 4": "textures/walls/(4).png",
      "Wall 5": "textures/walls/(5).png",
      "Wall 6": "textures/walls/(6).png",
      "Wall 7": "textures/walls/(7).png",
    }
  },
  floorUrl: {
    value: 'textures/walls/(5).png', options: {
      "Wall 1": "textures/walls/(1).png",
      "Wall 2": "textures/walls/(2).png",
      "Wall 3": "textures/walls/(3).png",
      "Wall 4": "textures/walls/(4).png",
      "Wall 5": "textures/walls/(5).png",
      "Wall 6": "textures/walls/(6).png",
      "Wall 7": "textures/walls/(7).png",
    }
  },
  lightRadius: { value: 0, label: 'Light Radius' },
  showAxesHelper: { value: false },
}
