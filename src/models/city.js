import { DataTypes } from "sequelize";

const City = (sequelize) => {
  const CityModel = sequelize.define("City", {
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define Associations
  CityModel.associate = (models) => {
    // A City has many Airports
    CityModel.hasMany(models.Airport, {
      foreignKey: "cityId",
      as: "airports",
    });

  };

  return CityModel;
};

export default City;
