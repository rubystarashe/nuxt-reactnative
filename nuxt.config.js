module.exports = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  build: {
    publicPath: '/app/'
  },
  generate: {
    dir: 'reactnative/android/app/src/main/assets/nuxt'
  }
}
