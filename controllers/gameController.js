const { user_games, user_game_biodata } = require('../models');

module.exports = {
    list: async (req, res) =>{
        try {
            const data = await user_games.findAll({
                include :[
                    {model:user_game_biodata, as: 'user_game_biodata'}
                ]
        })
            return res.json({
                data: data
            })
        } catch (error) {
            return res.json({
                message : "Fatal Error!"
            })
        }
    },
    create: async (req, res) => {
        try {
            const data = await user_games.create({
                username: req.body.username,
                password: req.body.password
            })
            return res.json({
                data: data
            })
        } catch (error) {
            return res.json({
                message : "Fatal Error!"
            })
        }
    },
    updatePass: async (req, res) => {
        try {
            const data = await user_games.update({
                password: req.body.password
            },{
                where: {
                    id: req.body.id
                }
            })
            return res.json({
                data: data
            })
        } catch (error) {
            return res.json({
                message : "Fatal Error!"
            })
        }
    },
    updateUsername: async (req, res) => {
        try {
            const data = await user_games.update({
                username: req.body.username
            },{
                where: {
                    id: req.body.id
                }
            })
            return res.json({
                data: data
            })
        } catch (error) {
            return res.json({
                message : "Fatal Error!"
            })
        }
    },
    destroy: async (req, res) => {
        try {
            const data = await user_games.destroy({
                where: {
                    id: req.body.id
                }
            })
            return res.json({
                data: data
            })
        } catch (error) {
            return res.json({
                message : "Fatal Error!"
            })
        }
    }
}