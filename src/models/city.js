import { DataTypes , Sequelize } from "sequelize";
import config from "../config/config.json" assert {type : 'json'} ; 

const env  = process.env.NODE_ENV || "development";
const dbConfig = config[env];


const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  
});

const City = sequelize.define("City", {
    name : {
      type : DataTypes.STRING,
      allowNull : false ,
      unique : true
    }
}, {
    timestamps: true,
});

City.associate = (models) => {
  City.hasMany(models.Airport , {
    foreignKey : 'cityId',
    as : 'airports'
  })
}

export default City;
