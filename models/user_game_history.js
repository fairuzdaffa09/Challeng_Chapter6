'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user_games, {
        foreignKey: 'user_id'
      })
      // define association here
    }
  }
  user_game_history.init({
    last_login: DataTypes.DATE,
    score: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};