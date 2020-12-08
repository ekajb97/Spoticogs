import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from 'spotify-web-api-js'

// Using Client Credentials Flow to Authenticate



var spotifyApi = new Spotify();
const clientId = '9e3ee580c9d44f7d805d8fc1fb45a6a2';



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

	/*
	db.getRelease(12353785, function (err, data) {
	console.table(data);
	var name = data;
	return name;
	});
	*/
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

/*
export const getSpotAuth = async () => {
	//const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
	//const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;

	const clientSecret = '62ea3d21b713498f9f255207e9b28cb2';

	const headers = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		auth: {
			username: clientId,
			password: clientSecret,
		},
	};
	const data = {
		grant_type: 'client_credentials',
	};

	try {
		const response = await axios.post(
			'https://accounts.spotify.com/api/token',
			qs.stringify(data),
			headers
		);
		console.log("Access Token: " + response.data.access_token);
		return response.data.access_token;
	} catch (error) {
		console.log(error);
	}
};
*/