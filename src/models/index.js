import { Sequelize } from "sequelize";
import config from "../config/config.json" assert { type: "json" };
import City from "./city.js";
import Airport from "./airport.js";
import Flight from "./flight.js";
import Airplane from "./airplane.js";
import Seat  from "./seat.js";


const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const models = {
  City: City(sequelize),
  Airport: Airport(sequelize),
  Flight : Flight(sequelize),
  Airplane : Airplane(sequelize),
  Seat : Seat(sequelize)
};

// Apply associations
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Export models and Sequelize instance
models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
