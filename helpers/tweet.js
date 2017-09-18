const Twitter = require('twitter');

export default class tweet {
  static postTweet() {
    const client = new Twitter({
      consumer_key: process.env.CKEY,
      consumer_secret: process.env.CSECRET,
      access_token_key: process.env.AKEY,
      access_token_secret: process.env.ASECRET
    })

    client.post('statuses/update', {status: 'I completed a todo item!'}, (error, tweet, response) => {
      if(error) throw error;
    });
  }
}

