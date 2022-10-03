const router = require('express').Router();
const { viewAllThoughts,  viewThoughtById,  createNewThought,  updateThought,  deleteThought, createNewReaction, deleteReaction } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(viewAllThoughts);

router
    .route('/:id')
    .get(viewThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/user/:userId')
    .post(createNewThought);

router
    .route('/:thoughtId/reactions')
    .post(createNewReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
    
module.exports = router;
