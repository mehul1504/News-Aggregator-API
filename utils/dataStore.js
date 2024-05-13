const User = require('../models/user');
const users= [];

function addUser(user){
    users.push(user);
};

function getUserByEmail (email) {
    return users.find(user => user.email === email)
};


module.exports ={
    users,addUser,getUserByEmail
}