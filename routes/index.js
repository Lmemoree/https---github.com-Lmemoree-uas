var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function (client) {
  router.get('/', function(req, res, next) {
    const sql = `select * from llu26`
    client.query(sql,(err,users) => {
      console.log(users.rows )
    })
    res.render('index', { title: 'Express' });
  });
  return router
}

