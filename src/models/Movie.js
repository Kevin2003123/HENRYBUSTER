const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      date:{
        type: DataTypes.DATE,
        allowNull: false
      },
      vote_count:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      vote_average:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
    }
  );
};
