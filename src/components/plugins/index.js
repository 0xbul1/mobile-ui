//所有插件统一入口，不用在main.js里一个写一次
module.exports = {
  common: require('./common'),
  dialog: require('../dialog/index')
  /*loading: require('./loading')*/
}