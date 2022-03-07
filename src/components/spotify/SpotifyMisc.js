import React from 'react';
import Spotify from 'spotify-web-api-js';
import { loginUrl, getTokenFromUrl} from './spotifyAuth';

// Using Client Credentials Flow to Authenticate
var spotifyApi = new Spotify();


class SpotifyMisc extends React.Component {
	constructor() {
		super();
		const params = getTokenFromUrl();
		this.state = {
			loggedIn: params.access_token ? true : false,
			button:'Connect to Spotify',
			music: []
		}
		if (this.state.loggedIn === true) {
			spotifyApi.setAccessToken(params.access_token);
		}
	}

	componentDidMount() {
		if (this.state.loggedIn === true) {
			spotifyApi.getMyTopTracks().then((response) => {
				for (var i = 0; i < response.items.length; i++) {
					this.setState(
						{
							button: 'Reconnect to Spotify',
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
		else{

		}


	}

	handleShow = ()=>{
		this.setState({
			loggedIn: true
		})
	}

	handleHide = () =>{
		this.setState({
			loggedIn: false
		})
	}

	render() {
		if (this.state.loggedIn) {
		return (
			<div>

				<div>
					<table align="center" class="scrollt">
						<tr >
							<th>#</th>
							<th>Image</th>
							<th>Track</th>
							<th>Artist</th>
							<th>Album</th>
							<th>Buy</th>
						</tr>
					{this.state.music.map(function (d, idx) {
						return (
						<tr>
							<td key={idx}>{idx+1}</td>
							<td key={idx}>
								<img id={"art"}
									 height={100} width={100}
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
				} else {
					return (
						<div>
						<div class="container">
							<div id="mainedit">
								<h2>Welcome to Spoticogs!</h2>
								<h4>This application allows a user to search their top 20 Spotify tracks with a direct link to the respective songs on the Discogs Marketplace</h4>
								<a href={loginUrl}>
									<button>{this.state.button}</button>
								</a>
								<br></br>
								<p>	Killian Flood</p>
								<p> Jake Byrne </p>
								<p> Agata Lanecka </p>
								<p> Alyssa Simbulan </p>

							</div>
						</div>
						</div>
					  );
				}
	}
}

export default SpotifyMisc;
