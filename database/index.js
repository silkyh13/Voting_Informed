require("dotenv").config();
const Sequelize = require("sequelize");
//this is like the schema but runs automatically
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Sequelize connection established");
})
.catch(err => console.error("Unable to connect:", err));

const User = sequelize.define("user", {
    firstName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
const Message = sequelize.define("message", {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//creates relationship between User and Message table AND get everything currently associated with this,
User.hasMany(Message);
//adds foreign key to User table
Message.belongsTo(User);
//translates code into sql
sequelize.sync();

module.exports = {
    User,
    Message
}