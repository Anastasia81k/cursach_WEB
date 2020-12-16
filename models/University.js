const {Schema, model} = require("mongoose");

const schema = new  Schema({
    universCity: {type: String},
    university: {type: String},
    raiting: {type: String},
    link: {type: String}

});

module.exports = model("universitys", schema);
