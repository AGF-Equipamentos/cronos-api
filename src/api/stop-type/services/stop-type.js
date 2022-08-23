'use strict'

/**
 * stop-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::stop-type.stop-type')
