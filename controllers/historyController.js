const { user_game_history, user_games } = require('../models');

module.exports = {
    list: async (req, res) =>{
        try {
            const data = await user_game_history.findAll(
                {
                    include: [{
                        model: user_games,
                        as: 'user_games'
                    }]
                }
            )
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
            const data = await user_game_history.create({
                last_login: req.body.last_login,
                score: req.body.score
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
    update: async (req, res) => {
        try {
            const data = await user_game_history.update({
                last_login: req.body.last_login,
                score: req.body.score
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
            const data = await user_game_history.destroy({
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