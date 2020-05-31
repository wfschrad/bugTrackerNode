'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bugs', [
      {
        title: 'WorldView - Failed Prop Type',
        description: 'Material-UI: Either `children`, `image`, `src` or `component` prop must be specified. (uiCard.js 122)',
        priorityLvl: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video Eats - Styling',
        description: 'Material-UI: Fix color scheme and layout sizing throughout site `children`, `image`, `src` or `component` prop must be specified. (uiCard.js 122)',
        priorityLvl: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bugs', null, {});
  }
};
