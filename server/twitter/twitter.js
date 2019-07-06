const axios = require('axios');
const token = require('./token');

const getFollowers = (username) => {
  return axios.get('https://api.twitter.com/1.1/users/show.json', {
    params: {
      screen_name: username
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => (
    {
      username: response.data.screen_name,
      followerCount: response.data.followers_count
    }
  ));
}

module.exports.getFollowers = getFollowers;