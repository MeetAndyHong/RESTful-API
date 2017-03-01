/**
 * Created by charles on 1/24/17.
 */


var Bear = require('./models/bear');

module.exports = function (router) {


//middleware to use for all requests
    router.use(function (req, res, next) {
        console.log('Something is happen');
        next(); // make sure we go to the next routes and don't stop here.
    });

    router.get('/', function (req, res) {
        res.json({message: 'hooray! welcome to our api'});
    });

    router.route('/bears')
        .post(function (req, res) {
            var bear = new Bear(); // create an instance in Bear Model
            bear.name = req.body.name; // set name from request to name property of bear

            bear.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({message: 'Bear created'});
            });
        })
        .get(function (req, res) {
            Bear.find(function (err, response) {
                if (err)
                    res.send(err);
                res.json(response);
            });
        });

// add another router.route() to handle all requests that have a :bear_id attached to them

    router.route('/bears/:bear_id')
        .get(function (req, res) {
            Bear.findById(req.params.bear_id, function (err, bear) {
                if (err)
                    res.send(err);
                res.json(bear)
            })
        })
        .put(function (req, res) {
            Bear.findById(req.params.bear_id, function (err, bear) {
                if (err)
                    res.send(err);
                bear.name = req.body.name;

                //save the bear
                bear.save(function (err) {
                    if (err)
                        res.send(err);
                    res.json({message: 'Bear updated!'});
                });
            });
        })
        .delete(function (req, res) {
            Bear.remove({
                _id: req.params.bear_id
            }, function (err, bear) {
                if (err)
                    res.send(err);
                res.json({message: 'sucessfully deleted'})
            });
        });
}
































