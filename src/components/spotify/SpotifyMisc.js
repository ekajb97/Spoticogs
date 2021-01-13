import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from 'spotify-web-api-js';

// Using Client Credentials Flow to Authenticate
var spotifyApi = new Spotify();

class SpotifyMisc extends React.Component {

	constructor() {
		super();
		const params = this.getHashParams();
		this.state = {
			loggedIn: params.access_token ? true : false,
			music: { name: 'notchecked' }
		}
		if (params.access_token) {
			spotifyApi.setAccessToken(params.access_token);
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

	getTracks() {
		spotifyApi.getMyTopTracks().then((response) => {
			this.setState({
				music: {
					name: response.items[0].name
				}
			});

			//for (var i = 0; i < response.items.length; i++) {
			//	var song_info = {
			//		song: response.items[i].name,
			//		artist: response.items[i].artists[0].name,
			//		album_name: response.items[i].album.name,
			//		album_art: response.items[i].album.images[0]
			//	}
			//	music[i] = song_info;
			//}

		});
	}

	render() {
		return (
			<div>
				<a href={'http://localhost:8888'}>
					<button>Connect to Spotify</button>
				</a>
				<div>Track: {this.state.music.name}</div>
				<button onClick={this.getTracks()}>Get Music Returns</button>
			</div>



		);
	}
}

export default SpotifyMisc;
