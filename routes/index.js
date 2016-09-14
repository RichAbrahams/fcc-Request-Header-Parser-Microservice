var express = require('express');
var router = express.Router();
var useragent = require('useragent');

/* GET home page. */
router.get('/', function(req, res, next) {
  var agent = useragent.parse(req.headers['user-agent']);
  console.log(agent);
  console.log(req.ip.toString());
  console.log(req.acceptsLanguages());
  var output = {
    os: agent.os.toString(),
    ip: req.ip.toString(),
    lang: req.acceptsLanguages().toString()

  }
res.json(output);
});

module.exports = router;
