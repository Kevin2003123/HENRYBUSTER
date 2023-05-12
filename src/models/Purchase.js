const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Purchase",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendiente"
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      idUser:{
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  );
};