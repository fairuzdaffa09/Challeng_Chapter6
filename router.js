const express = require('express');
const router = express.Router();
const gameController =  require('./controllers/gameController');
const biodataController = require('./controllers/biodataController');
const historyController = require('./controllers/historyController');

//gameUser
router.get('/game_user/list',gameController.list)
router.post('/game_user/create', gameController.create)
router.put('/game_user/updatepass', gameController.updatePass)
router.put('/game_user/updateusername', gameController.updateUsername)
router.delete('/game_User/destroy', gameController.destroy)

//gameBiodata
router.get('/game_biodata/list',biodataController.list)
router.post('/game_biodata/create', biodataController.create)
router.put('/game_biodata/update', biodataController.update)
router.delete('/game_biodata/destroy', biodataController.destroy)

//gameHistory
router.get('/game_history/list',historyController.list)
router.post('/game_history/create', historyController.create)
router.put('/game_history/update', historyController.update)
router.delete('/game_history/destroy', historyController.destroy)

module.exports = router