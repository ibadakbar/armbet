var plugins = [{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-glamor/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#ffffff","theme_color":"#E52D2D","display":"standalone","icon":"src/assets/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"1f1b2afde2bc71e4cbf57d3d9df23127"},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://www.armbet.com"},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-load-script/gatsby-ssr'),
      options: {"plugins":[],"src":"https://maps.googleapis.com/maps/api/js?key=AIzaSyDBZNOrpaYIJZiUxQCZ2QUoRBcYMnwBpdM&libraries=places","onLoad":"() => window.googleMapsHasLoaded = true"},
    },{
      plugin: require('E:/project/web-app-main/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"E:\\project\\web-app-main/src/containers/Layout/index.js"},
    },{
      plugin: require('E:/project/web-app-main/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
