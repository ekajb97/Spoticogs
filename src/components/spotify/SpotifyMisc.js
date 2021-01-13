import React from 'react';
import ReactDOM from 'react-dom';
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
			music: { track: 'notchecked',
				     artist: 'notchecked',
					 album: 'notchecked',
					 art: 'notchecekd',
					 id: 'notcheked'
			}
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
					track: response.items[0].name,
					artist: response.items[0].artists[0].name,
					album: response.items[0].album.name,
					art: response.items[0].album.images[0].url

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
			//getDisc()
			// 			 			{
			// 			 				db.search({ release_title: this.state.music.album, artist: this.state.music.artist, type: 'master'})
			// 			 					.then(function (obj) {
			// 			 						console.log(obj)
			// 			 						console.log("Discogs master ID needed for Marketplace Search: " + obj.results[0].master_id)
			// 									this.setState({
			// 										music: {
			// 											id: obj.results[0].master_id
			// 										}
			// 										})
			//
			// 			 					});
			// 			 			}
			//}

		});
	}

	render() {
		return (

			<div>
				<a href={'http://localhost:8888'}>
					<button>Connect to Spotify</button>
				</a>
				<table>
					<tr>
						<th>Image</th>
						<th>Track</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Buy</th>
					</tr>
					<tr>
						<td>
							<img height={100} width={100}
								src={this.state.music.art}
								alt={this.state.music.album}>
							</img>
						</td>
						<td>{this.state.music.track}</td>
						<td>{this.state.music.artist}</td>
						<td>{this.state.music.album}</td>
						<td><a href={"https://www.discogs.com/sell/list?master_id=" + "" + "&ev=mb"} >Buy Here!</a></td>
					</tr>

				</table>

				<button onClick={this.getTracks()}>Get Music Returns</button>
			</div>



		);
	}
}

export default SpotifyMisc;
