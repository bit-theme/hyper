const {
  defaultPalette,
  softPalette,
  intensePalette,
} = require('./palettes')

function getColorPalette(variant) {
  if (!variant) {
    return defaultPalette
  }

  switch (variant) {
    case 'soft':
      return softPalette

    case 'intense':
      return intensePalette

    default:
      return defaultPalette
  }
}

module.exports = { getColorPalette }
