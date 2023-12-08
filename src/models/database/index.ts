import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize('postgres://avnadmin:AVNS_-OUKE0h9KiE-56im7-Z@user-auth-user-authentication.a.aivencloud.com:23796/defaultdb?sslmode=require')


export default sequelize;

export { DataTypes, Model}