import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from 'spotify-web-api-js'

// Using Client Credentials Flow to Authenticate



var spotifyApi = new Spotify();



class SpotifyMisc extends React.Component {
	constructor() {
		super();
		const params = this.getHashParams();
		this.state = {
			loggedIn: params.access_token ? true : false,
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

	getMusic() {
		spotifyApi.getMyTopTracks()
			.then((response) => {
				console.log(response.items);
			})
	}

	render() {
		return (
			<div>
				<a href={'http://localhost:8888'}>
					<button>Login with Spotify</button>
				</a>
				<button onClick={this.getMusic}>Get Music</button>
			</div>

		);
	}
}

export default SpotifyMisc;
