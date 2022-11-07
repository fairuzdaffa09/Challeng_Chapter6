const { user_game_biodata } = require('../models');

module.exports = {
    list: async (req, res) =>{
        try {
            const data = await user_game_biodata.findAll(
                
            )
            return res.json({
                data: data
            })
        } catch (error) {
            console.log(error);
            return res.json({
                message : "Fatal Error!"
            })
        }
    },
    create: async (req, res) => {
        try {
            const data = await user_game_biodata.create({
                name: req.body.name,
                email: req.body.email
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
            const data = await user_game_biodata.update({
                name: req.body.name,
                email: req.body.email
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
            const data = await user_game_biodata.destroy({
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