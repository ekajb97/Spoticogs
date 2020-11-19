const { default: SpotifyWebApi } = require('spotify-web-api-js');
var Spotify = require('spotify-web-api-js');
var s = new Spotify();

var spot = new SpotifyWebApi();
spot.setAccessToken('<add-access-token>');
