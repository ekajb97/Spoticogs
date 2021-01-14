import React from 'react';
import Spotify from 'spotify-web-api-js';

// Using Client Credentials Flow to Authenticate
var spotifyApi = new Spotify();
var Discogs = require('disconnect').Client;
var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();

function getDisc() {

}

class SpotifyMisc extends React.Component {
	getDisc;

	constructor() {
		super();
		const params = this.getHashParams();
		this.state = {
			loggedIn: params.access_token ? true : false,
			music: []
			//{ song: "", artist: "", album: "", link: "", image: "" }
		}
		if (this.state.loggedIn === true) {
			spotifyApi.setAccessToken(params.access_token);
		}
	}

	componentDidMount() {
		spotifyApi.getMyTopTracks().then((response) => {
			for (var i = 0; i < response.items.length; i++) {
				this.setState(
					{
						music: [...this.state.music,
						{
							image: response.items[i].album.images[0].url,
							song: response.items[i].name,
							artist: response.items[i].artists[0].name,
							album: response.items[i].album.name,
							link: ""
						}]
					}
				)
			}
		});

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

	render() {
		return (

			<div>
				<a href={'http://localhost:8888'}>
					<button>Connect to Spotify</button>
				</a>
				<div>
					<table>{this.state.music.map(function (d, idx) {
						return (<tr>
							<td key={idx}>
								<img height={100} width={100}
									 src={d.image}
									 alt={d.album}>
								</img>
							</td>
							<td key={idx}>{d.song}</td>
							<td key={idx}>{d.artist}</td>
							<td key={idx}>{d.album}</td>
							<td key={idx}><a href={"https://www.discogs.com/search/?q="+d.album+"&type=release&artist="+d.artist} >Buy Here!</a></td>
						</tr>)
					})}</table>
				</div>
			</div>
		);
	}
}

export default SpotifyMisc;
