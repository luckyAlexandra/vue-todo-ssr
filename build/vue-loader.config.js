// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 在写模板时不想让元素和元素之间有空格
    extractCSS: !isDev,// vue会单独处理它的css,默认vue文件里的css不会使用extractCss
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    //postcss
    //hotReload: false //根据环境变量生成
    // loaders: {
    //   'docs': docsLoader
    // }
    // preLoaders: {},
    // postLoaders: {}
  }
}