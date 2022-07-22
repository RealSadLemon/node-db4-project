const express = require('express');
const recipesModel = require('./recipes-model')

const router = express.Router();

router.get('/:id', (req, res, next) => {
    recipesModel.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
})

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(err);
})

module.exports = router;