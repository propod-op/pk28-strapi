'use strict';

/**
 * fish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fish.fish');
