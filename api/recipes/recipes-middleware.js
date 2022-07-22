const recipesModel = require('./recipes-model')

const checkIdExists = (req, res, next) => {
    recipesModel.getRecipeById(req.params.id)
        .then(recipe => {
            // if(recipe == null)
            res.status(404).json(recipe);
        })
}

module.exports = {
    checkIdExists
}