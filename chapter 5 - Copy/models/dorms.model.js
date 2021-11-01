const { Model, DataTypes } = require('sequelize')
const sequelize = require('./sequalize')

class Dorms extends Model {}

Model.init({
    id:{ 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    owner:{
        type: DataTypes.STRING,
        allowNull: false
    },
    facilities:{
        type: DataTypes.JSONB,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'dorms',
    timestamps: false,
})

module.exports = Dorms 