/**
 * Created by charles on 10/31/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String
});

module.exports=mongoose.model('Bear',BearSchema);








