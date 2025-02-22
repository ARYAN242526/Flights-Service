import { DataTypes , Sequelize } from "sequelize";
import config from "../config/config.json" assert {type : 'json'} ; 

const env  = process.env.NODE_ENV || "development";
const dbConfig = config[env];


const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  
});

const Airplane = sequelize.define("Airplane", {
    modelNumber : {
        type: DataTypes.STRING,
        allowNull: false,
        validate  : {
            isAlphanumeric : true
        },
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
       validate : {
        max : 1000
       }
    },
}, {
    timestamps: true,
});

export default Airplane;
