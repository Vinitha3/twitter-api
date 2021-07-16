const { default: axios } = require("axios");
require('dotenv').config();

const BASE_API_URL = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
  get(query,count) {
    return axios.get(BASE_API_URL, {
      params: {
        q : query,
        count : count,
        tweet_mode : "extended",
      },
      headers : {
        "Authorization" : `Bearer ${process.env.BEARER_TOKEN}`
      }
    })
  }
}

module.exports = Twitter;
