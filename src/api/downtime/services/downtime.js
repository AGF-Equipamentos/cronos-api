'use strict'

/**
 * downtime service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::downtime.downtime')
