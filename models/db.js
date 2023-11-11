const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('user', 'root', '445083', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
  console.log('Sucesso na conexão');
}).catch(function(){
  console.log('erro na conexão');
})

module.exports = sequelize;