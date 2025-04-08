import { DataTypes } from "sequelize";

const Seat = (sequelize) => {
  const SeatModel = sequelize.define('Seat' , {
    airplaneId: {
      type :  DataTypes.INTEGER,
      allowNull : false
    },
    row: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    col: {
      type : DataTypes.STRING,
      allowNull : false
    },
    type: {
      type : DataTypes.ENUM,
      values : ['business','economy','premium-economy','first-class'],
      default : 'economy',
      allowNull : false
    }
  });

  SeatModel.associate = (models) => {
    SeatModel.belongsTo(models.Airplane,{
      foreignKey : 'airplaneId',
    })
  }

 
return SeatModel;
}
export default Seat;