export const controls = {
  enableAnim: { value: false, label: 'Enable Animation' },

  roomWidth: { value: 5, label: 'Room Width' },
  roomHeight: { value: 5, label: 'Room Height' },
  roomLength: { value: 5, label: 'Room Length' },
  wallUrl: {
    value: 'textures/walls/(1).png', options: {
      "Wall 1": "textures/walls/(1).png",
      "Wall 2": "textures/walls/(2).png",
      "Wall 3": "textures/walls/(3).png",
    },
    label: 'Wall Texture',
  },
  floorUrl: {
    value: 'textures/floors/(2).png', options: {
      "Floor 1": "textures/floors/(1).png",
      "Floor 2": "textures/floors/(2).png",
      "Floor 3": "textures/floors/(3).png",
      "Floor 4": "textures/floors/(4).png",
      "Floor 5": "textures/floors/(5).png",
      "Floor 6": "textures/floors/(6).png",
      "Floor 7": "textures/floors/(7).png",
    },
    label: 'Floor Texture',
  },

  tableUrl: {
    value: 'models/tables/(1).glb', options: {
      "Table 1": "models/tables/(1).glb",
    },
    label: 'Table Model',
  },

  showMug: { value: true, label: 'Show Mug' },
  mugUrl: {
    value: 'models/mugs/(1).glb', options: {
      "Mug 1": "models/mugs/(1).glb",
    },
    label: 'Mug Model',
  },

  showCard: { value: false, label: 'Show Card' },
  cardUrl: {
    value: 'textures/cards/(1).png', options: {
      "Card 1": "textures/cards/(1).png",
      "Card 2": "textures/cards/(2).png",
    },
    label: 'Card Texture',
  },
  cardWidth: { value: 1.5, label: 'Card Width' },
  cardHeight: { value: 2, label: 'Card Height' },
  cardLength: { value: 0.1, label: 'Card Length' },

  showFrame: { value: false, label: 'Show Frame' },
  frameUrl: {
    value: 'textures/frames/(1).png', options: {
      "Frame 1": "textures/frames/(1).png",
      "Frame 2": "textures/frames/(2).png",
      "Frame 3": "textures/frames/(3).png",
      "Frame 4": "textures/frames/(4).png",
      "Frame 5": "textures/frames/(5).jpg",
    },
    label: 'Frame Texture',
  },
  frameWidth: { value: 1.5, label: 'Frame Width' },
  frameHeight: { value: 2, label: 'Frame Height' },
  frameLength: { value: 0.1, label: 'Frame Length' },

  lightRadius: { value: 0, label: 'Light Radius' },
  showAxesHelper: { value: false, label: 'Axis Helper' },
}
