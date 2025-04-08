import { DataTypes, Sequelize } from "sequelize";

const Airplane = (sequelize) => {
    const AirplaneModel = sequelize.define("Airplane", {
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
    // define associations
    AirplaneModel.associate = (models) => {
        AirplaneModel.hasMany(models.Flight ,{
            foreignKey : 'airplaneId',
            onDelete : 'CASCADE'
        });
        AirplaneModel.hasMany(models.Seat,{
            foreignKey : 'airplaneId',
            onDelete : 'CASCADE'
        })
    }

    return AirplaneModel;
}

export default Airplane;
