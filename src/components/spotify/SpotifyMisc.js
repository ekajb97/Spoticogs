import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyWebApi from 'spotify-web-api-js'

// Using Client Credentials Flow to Authenticate
import axios from 'axios';
import qs from 'qs';

class SpotifyMisc extends React.Component {
	render() {
		return (
			<div>
				<button onClick={getSpotAuth}>I'm Spotify</button>
			</div>
		);
	}
}

export default SpotifyMisc;


export const getSpotAuth = async () => {
	//const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
	//const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
	const clientId = '9e3ee580c9d44f7d805d8fc1fb45a6a4';
	const clientSecret = '62ea3d21b713498f9f255207e9b28cb3';

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

