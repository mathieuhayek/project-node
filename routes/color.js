const express = require('express'),
      router = express.Router(),
      sql = require('../database.js');

router.get('/color/', (request, response) => {
    Color.findAll().then(function(colors) {   
        response.render('colorAll', {
            colorAll : colors
         })
    })
  })
  