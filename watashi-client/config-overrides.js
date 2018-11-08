/* config-overrides.js */
// const { getBabelLoader } = require('react-app-rewired')
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  // const babelLoader = getBabelLoader(config.module.rules);

  config = rewireStyledComponents(config, env);

  // config.module.rules.map(rule => {
  //   if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
  //     return rule
  //   }

  //   rule.oneOf.unshift({
  //     test: /.mdx$/,
  //     use: [
  //       {
  //         loader: babelLoader.loader,
  //         options: babelLoader.options
  //       },
  //       '@mdx-js/loader'
  //     ]
  //   })

  //   return rule
  // })

  return config;
}
