'use strict'

const {
  colors,
  backgroundColor,
  foregroundColor,
  borderColor,
  cursorColor,
} = require('./colors')

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    colors,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }
      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  })
}


