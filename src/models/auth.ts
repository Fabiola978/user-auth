import sequelize, { DataTypes, Model }  from "./database";

const { STRING, DATEONLY} = DataTypes;

//is:["^[Aa-Zz]+$/",'i'] , isAlphanumeric: true,  isLowercase: true, isUppercase: true,


class Password extends Model {}

Password.init({

  id:{
    type: STRING,
    references: {
        model: 'User',
        key: 'id',
      },
    allowNull: false

  },
password: {
    type: STRING,
    allowNull: false
},

}, {
  
  sequelize, 
  modelName: 'User',
  tableName: 'Users',
  createdAt: true
});

export default Password;