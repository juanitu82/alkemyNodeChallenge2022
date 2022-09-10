const { Character: CharacterModel } = require('../models/index')

class CharactersController {
    
    async getCharacters(req, res, next){
        let queriedCharacters
        try {
            queriedCharacters = await CharacterModel.findAll()
            
        } catch (error) {
            next(error)
        }
        res.status(200).json(queriedCharacters)
    }

    async getCharacterById(req, res, next){
        const characterId = parseInt(req.params.id)
        let searchedCharacter

        try {
            searchedCharacter = await CharacterModel.findOne({
                where: { 
                    id: characterId 
                }
            })

        } catch (error) {
            next(error)            
        }

        searchedCharacter ? 
        res.status(200).json(searchedCharacter)
        :
        res.status(404).json({
            msge: 'No character found!'
        })
    }

    async createUser(req, res, next){
        let characterCreated

        try {
            characterCreated = await CharacterModel.create(req.body)
        } catch (error) {
            next(error)
        }

        if(characterCreated) res.status(200).send('The character has been successfully created')
        else throw new Error('An error occured while creating the character')
    }

    async updateUser(req, res, next){

        const characterId = parseInt(req.params.id)

        // Array with req.body keys
        const characterUpdateFields = Object.keys(req.body)
        // Array with user model attributes
        const characterDataFields = ['name', 'age', 'weight', 'story', 'image']
        // method to validate that any of the req.body incoming values are valid user attributes to modify
        const permitedData = characterUpdateFields.every( arrayItem => characterDataFields.includes(arrayItem))

        try {
            if(permitedData){
                await CharacterModel.update( req.body , {
                    where: { 
                        id: characterId
                    }
                })
            } else {
                const error = new Error('Youre trying to update an invalid attribute')
                next(error)
            }

        } catch (error) {
            next(error)
        }

        res.status(203).send('The character was updated')
    }

    async wipeUser(req, res, next){
        
        const characterId = parseInt(req.params.id)
      
        try {
            if(typeof characterId === 'number'){
                await CharacterModel.destroy({
                    where: { 
                        id: characterId
                    }
                })
            } else throw new Error('Youd entered an invalid character id')
        } catch (error) {
            next(error)
        }

        res.status(200).send('The character has been correctly wiped from database')
    }
}

module.exports = CharactersController