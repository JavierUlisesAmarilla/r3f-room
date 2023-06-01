export const controls = {
  roomWidth: { value: 5, label: 'Room Width' },
  roomHeight: { value: 5, label: 'Room Height' },
  roomLength: { value: 5, label: 'Room Length' },
  wallUrl: {
    value: 'textures/walls/(3).png', options: {
      "Wall 1": "textures/walls/(1).png",
      "Wall 2": "textures/walls/(2).png",
      "Wall 3": "textures/walls/(3).png",
      "Wall 4": "textures/walls/(4).png",
      "Wall 5": "textures/walls/(5).png",
      "Wall 6": "textures/walls/(6).png",
      "Wall 7": "textures/walls/(7).png",
    },
    label: 'Wall Texture',
  },
  floorUrl: {
    value: 'textures/walls/(2).png', options: {
      "Floor 1": "textures/walls/(1).png",
      "Floor 2": "textures/walls/(2).png",
      "Floor 3": "textures/walls/(3).png",
      "Floor 4": "textures/walls/(4).png",
      "Floor 5": "textures/walls/(5).png",
      "Floor 6": "textures/walls/(6).png",
      "Floor 7": "textures/walls/(7).png",
    },
    label: 'Floor Texture',
  },

  mugUrl: {
    value: 'textures/mugs/(4).jpg', options: {
      "Mug 1": "textures/mugs/(1).jpg",
      "Mug 2": "textures/mugs/(2).jpg",
      "Mug 3": "textures/mugs/(3).jpg",
      "Mug 4": "textures/mugs/(4).jpg",
      "Mug 5": "textures/mugs/(5).png",
    },
    label: 'Mug Texture',
  },
  mugRadiusTop: { value: 0.2, label: 'Mug Radius Top' },
  mugRadiusBottom: { value: 0.16, label: 'Mug Radius Bottom' },
  mugHeight: { value: 0.5, label: 'Mug Height' },

  lightRadius: { value: 0, label: 'Light Radius' },
  showAxesHelper: { value: false, label: 'Axis Helper' },
}
