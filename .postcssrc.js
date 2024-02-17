// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'IOS >= 8']
    },
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
