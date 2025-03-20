import { Sequelize } from "sequelize";
import config from "../config/config.json" assert { type: "json" };
import cityModel from "./city.js";
import airportModel from "./airport.js";


const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const models = {
  City: cityModel,
  Airport: airportModel,
};

// Initialize models
Object.keys(models).forEach((modelName) => {
  models[modelName] = models[modelName](sequelize);
});

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
