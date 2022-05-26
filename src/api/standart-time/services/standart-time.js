'use strict';

/**
 * standart-time service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::standart-time.standart-time');
