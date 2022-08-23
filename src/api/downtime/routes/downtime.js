'use strict'

/**
 * downtime router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::downtime.downtime')
