import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from 'spotify-web-api-js';

// Using Client Credentials Flow to Authenticate
var spotifyApi = new Spotify();

class SpotifyMisc extends React.Component {

	constructor() {
		super();
		const params = this.getHashParams();
		var music = {};
		this.state = {
			loggedIn: params.access_token ? true : false,
		}
		if (params.access_token) {
			spotifyApi.setAccessToken(params.access_token);
			spotifyApi.getMyTopTracks().then((response) => {
				for (var i = 0; i < response.items.length; i++) {
					var song_info = {
						song: response.items[i].name,
						artist: response.items[i].artists[0].name,
						album_name: response.items[i].album.name,
						album_art: response.items[i].album.images[0]
					}
					music[i] = song_info;
				}
			});
			console.log("The Music: ");
			console.log(music)
		}
	}
	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while (e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}

	//getMusic() {
	//	var musicDetails = [];
	//	spotifyApi.getMyTopTracks()
	//		.then((response) => {
	//			//filter and call in here?
	//			console.log("Inside Method: ");
	//			console.log(response.items);
	//			return response.items;
	//		});
	//}


	render() {
		return (
			<div>
				<a href={'http://localhost:8888'}>
					<button>Login with Spotify</button>
				</a>
			</div>



		);
	}
}

export default SpotifyMisc;
