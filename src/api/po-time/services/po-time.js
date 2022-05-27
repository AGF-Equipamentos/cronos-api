'use strict'

/**
 * po-time service.
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService('api::po-time.po-time')
