var express = require('express'),
    router = express.Router(),
    yelp = require('node-yelp'),
    yelpClient = yelp.createClient({
      oauth: {
        "consumer_key": "vlWeJEQZaiv_3K-fLZwLmA",
        "consumer_secret": "yCQ2QNtCTWw5JEpHCN9Oz0Il3Y0",
        "token": "qmalFhYRX72TmcGDLcGOrjuPovy7PMVm",
        "token_secret": "OIKrspfaq_3ZzooXTMPW1A2RIUA"
      }
    });

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/query/:lat/:long', function(req, res) {
  yelpClient.search({
    terms: "pizza",
    ll: ''+req.params.lat+','+req.params.long
  }).then(function (data) {
    var businesses = data.businesses;
    var location = data.region;

    res.json(data);
  });


});

module.exports = router;
