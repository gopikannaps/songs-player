'use strict';

/**
 * songs-player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::songs-player.songs-player');
