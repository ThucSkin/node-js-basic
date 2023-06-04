const express = require('express');

const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', './src/views')
}

module.exports = configViewEngine;