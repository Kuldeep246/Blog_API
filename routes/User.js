
const express = require('express');
const verifyToken = require('../middlewares/verifyToken')
const {updateUser,deleteUser}=require('../controller/userController')

const router = express.Router();

router.put('/', verifyToken, updateUser );

router.delete('/', verifyToken, deleteUser);

module.exports = router;
