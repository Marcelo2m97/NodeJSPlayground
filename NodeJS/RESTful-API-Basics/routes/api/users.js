var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', (req, res) => {
  res.status(200).json([
    { name:"Marcelo", age: 22 },
    { name: "Andre", age: 20 }
  ])
})

module.exports = router;
