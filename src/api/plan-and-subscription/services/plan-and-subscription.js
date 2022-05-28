'use strict';

/**
 * plan-and-subscription service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plan-and-subscription.plan-and-subscription');
