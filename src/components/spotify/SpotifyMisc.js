import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from 'spotify-web-api-js'
import {render} from "@testing-library/react";
var Discogs = require('disconnect').Client;

// Using Client Credentials Flow to Authenticate

var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();


var spotifyApi = new Spotify();

var id;
var name;
var album;
var format = "Vinyl";


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
				console.log("Artist: " +response.items[0].artists[0].name)
				console.log("Album: "+response.items[0].album.name)
				console.log("Track Name: "+response.items[0].name)
				name=response.items[0].artists[0].name;
				album=response.items[0].album.name;
				return name;
				return album;
			})
		return name;
		return album;
	}

	getDisc(name, album) {
		var searchParams = {
			release_title: name,
			artist: album,
			type: 'master'


		};
		db.search(searchParams)
			.then(function (obj) {
				console.log(obj)
				console.log("Discogs master ID needed for Marketplace Search: " +obj.results[0].master_id)
				console.log(obj.results[0].title)
				id = obj.results[0].master_id;
			});
	}


	render() {
		return (
			<div>
				<a href={'http://localhost:8888'}>
					<button>Login with Spotify</button>
				</a>
				<button onClick={this.getMusic}>Get Music</button>
				<button onClick={this.getDisc}>Discogs x Spotify test</button>


				<div className={"button"}>

					<a href={"https://www.discogs.com/sell/list?master_id=" + db.id + "&ev=mb&format=" + format} >Buy Here!</a>


				</div>
			</div>



		);
	}
}

export default SpotifyMisc;
