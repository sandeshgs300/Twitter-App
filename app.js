console.log("The App is running");
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var tweet = {
  status:'#Tweet Example!!'
}
T.post('statuses/update',tweet,tweeted);

function tweeted(err, data, response){
  if(err)
  {
    console.log('Something went wrong!!');
  }
  else {
    console.log('It worked!!');
  }
  console.log(data);
}
