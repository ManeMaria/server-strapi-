'use strict';

/**
 * depositions service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::depositions.depositions');
