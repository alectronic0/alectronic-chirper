var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String, //this is actually a hash
    created_at: {type: Date, default: Date.now}
});


var postSchema = new mongoose.Schema({
    text: String,
    username: String,
    created_at: {type: Date, default: Date.now}
});

//Declare model called User with suerschema
mongoose.model("User",userSchema);
mongoose.model("Post",postSchema);
