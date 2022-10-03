const router = require('express').Router();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addNewFriend, deleteFriend } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)

router
    .route('/:userId/friends/:friendId')
    .put(addNewFriend)
    
module.exports = router;