
const express = require('express');
const homeController = require('../controller/homeController');

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create/user', homeController.createUser);
    router.post('/delete/user', homeController.deleteUser);
    router.get('/edit/user/:id', homeController.getEditPage);
    router.post('/update/user', homeController.updateUser);

    return app.use('/', router);
}

module.exports = initWebRoute;