const { getColorPalette } = require('./src/colors')

exports.decorateConfig = config => {
  const { variant } = config.bitThemeConfig || {}

  const palette = getColorPalette(variant)

  return Object.assign({}, config, {
    backgroundColor: palette.backgroundColor,
    foregroundColor: palette.foregroundColor,
    borderColor: palette.borderColor,
    cursorColor: palette.cursorColor,
    colors: palette.colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${palette.backgroundColor};
      }
      .tab_active:before {
        border-color: ${palette.borderColor};
      }
    `,
  })
}


