import { DataTypes } from "sequelize";

const Flight = (sequelize) => {
  const FlightModel = sequelize.define('Flight' , {
    flightNumber: {
      type :  DataTypes.STRING,
      allowNull : false
    },
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    departureAirportId: {
      type : DataTypes.STRING,
      allowNull : false
    },
    arrivalAirportId: {
      type : DataTypes.STRING,
      allowNull : false
    },
    arrivalTime: {
      type :  DataTypes.DATE,
      allowNull : false
    },
    departureTime:{
      type :  DataTypes.DATE,
      allowNull : false
    },
    price:{
      type :  DataTypes.INTEGER,
      allowNull : false
    },
    boardingGate: {
      type : DataTypes.STRING,
    },
    totalSeats: { // total remaining seats
      type : DataTypes.STRING,
      allowNull : false
    }
  });

  // define associations
  FlightModel.associate = (models) => {
    FlightModel.belongsTo(models.Airplane, {
      foreignKey : 'airplaneId',
      as : 'airplaneDetail'
    });
    FlightModel.belongsTo(models.Airport , {
      foreignKey : 'departureAirportId',
      as : 'departureAirport'
    });
    FlightModel.belongsTo(models.Airport , {
      foreignKey : 'arrivalAirportId',
      as : 'arrivalAirport'
    });

  }
  return FlightModel;
}
export default Flight;

  