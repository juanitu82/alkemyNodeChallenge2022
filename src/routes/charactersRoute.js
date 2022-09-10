const router = require('express').Router()
const CharactersClass = require('../controllers/Character-controllers')
const charactersController = new CharactersClass

router.get('/', charactersController.getCharacters)
router.get('/:id', charactersController.getCharacterById)
router.post('/', charactersController.createUser)
router.put('/:id', charactersController.updateUser)
router.delete('/:id', charactersController.wipeUser)

module.exports = router