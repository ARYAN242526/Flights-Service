import { DataTypes } from "sequelize";

const Airport = (sequelize) => {
  const AirportModel = sequelize.define("Airport", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code : {
      type : DataTypes.STRING,
      allowNull : false
    },
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cities", // Ensure this matches the actual City model name
        key: "id",
      },
    },
  });

  // Define Associations
  AirportModel.associate = (models) => {
    // An Airport belongs to a City
    AirportModel.belongsTo(models.City, {
      foreignKey: "cityId",
      as: "city", // Alias for joined data
      onDelete: "CASCADE", // If a City is deleted, its airports are removed
    });

  }
   

  return AirportModel;
};

export default Airport;
