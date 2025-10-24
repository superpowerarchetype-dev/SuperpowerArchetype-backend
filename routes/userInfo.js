
const express = require('express')
const {getUsers,getUser,createUser,updateUser,deleteUser} = require('../controllers/userInfo')
router = express.Router()

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)



module.exports = router