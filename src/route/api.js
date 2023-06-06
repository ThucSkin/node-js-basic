
const express = require('express');
const apiController = require('../controller/apiController');
let router = express.Router();

const initApiRoute = (app) => {
    router.get('/users', apiController.getAllUsers);
    router.post('/create-user', apiController.createUser);
    router.put('/update-user/:id', apiController.updateUser);
    router.delete('/delete-user/:id', apiController.deleteUser);

    return app.use('/api/v1/', router);
}

module.exports = initApiRoute;