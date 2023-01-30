'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', 
    [
      {
        nome: 'Pedro',
        ativo: false,
        email:'pedro@mail',
        role:'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos',
        ativo: true,
        email:'carlos@mail',
        role:'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joao',
        ativo: false,
        email:'joao@mail',
        role:'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
