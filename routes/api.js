'use strict';

const getMyInfos = require('../handlers')


module.exports = function (app) {
  
  app.route('/api/whoami')
    .get(getMyInfos)


};