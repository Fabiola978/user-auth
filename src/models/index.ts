import sequelize, { DataTypes, Model }  from "./database";

const { STRING, DATEONLY} = DataTypes;

//is:["^[Aa-Zz]+$/",'i'] , isAlphanumeric: true,  isLowercase: true, isUppercase: true,


class User extends Model {}

User.init({

  id:{
    type: STRING,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: STRING,
    allowNull: false

  },
  fullname: {
    type: STRING,
    allowNull: false
},
password: {
    type: STRING,
    allowNull: false
},
email: {
    type: STRING,
    allowNull: false

  },
  birthdate: {
    type: DATEONLY,
    allowNull: false

  },
  nationality: {
    type: STRING,
    allowNull: false

  }
}, {
  
  sequelize, 
  modelName: 'User',
  tableName: 'Users',
  createdAt: true
});


export default User;