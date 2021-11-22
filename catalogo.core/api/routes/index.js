const express = require ('express')
const bodyParser = require('body-parser')
const users = require('./usersRoute')
const abilities = require('./abilitiesRoute')
const skills = require('./skillsRoute')
const user_abilities = require('./user_abilitiesRoute')
const user_skills = require('./user_skillsRoute')
// const authentication_strategies = require ('./authentication_strategies')
const cors = require('cors');


module.exports = app => {
    app.use(bodyParser.json())
    app.use(
        users,
        abilities,
        skills,
        user_abilities,
        user_skills
        )
    app.use(cors({
        origin: '*',
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH', 'OPTIONS']
    }));
}