'use strict'

/**
 *  downtime controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::downtime.downtime')
