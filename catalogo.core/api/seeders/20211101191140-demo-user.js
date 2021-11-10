'use strict';

const { getMaxListeners } = require("..");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Dean Winchester',
				phone_number: 985620000,
        email: "dean@gmail.com",
        password: "dGVzdGUxMjM=",
        type: "customer",
        occupation: "Dev",
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        name: 'Sam',
				phone_number: 985628000,
        email: "sam@gmail.com",
        password: "dGVzdGUxMjM=",
        type: "customer",
        occupation: "Dev",
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        name: 'Charlie',
				phone_number: 962628000,
        email: "charlie@gmail.com",
        password: "dGVzdGUxMjM=",
        type: "customer",
        occupation: "Dev",
				createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        name: 'Amy Farrah',
				phone_number: 962628410,
        email: "amy@gmail.com",
        password: "dGVzdGUxMjM=",
        type: "customer",
        occupation: "Dev",
				createdAt: new Date(),
				updatedAt: new Date()
      },
      

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('Users', null, {});

  }
};
