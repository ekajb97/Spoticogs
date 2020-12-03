import './App.css';
import Disco from './components/discogs/test';
import Buy from './components/discogs/buyRelease';
import SpotifyMisc from './components/spotify/SpotifyMisc';
import React from "react";
import axios from "axios";
import qs from 'qs';


export default class App extends React.Component {
    state = {
        user: null,
        error: null,
        //authenticated:null
    }

    componentDidMount() {

         const getAuth = async () => {
            //const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
            //const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
            const clientId = 'insert_client';
            const clientSecret = 'insert_secret';

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
                console.log("Spotify Access Token: " + response.data.access_token);
                return response.data.access_token;
            } catch (error) {
                console.log(error);
            }
        };
         getAuth();

    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Spoticogs</h1>
                </header>
                <div>
                    <SpotifyMisc/>
                    <Disco/>
                    <p>Would you like fries with that?</p>
                    <Buy/>
                </div>
            </div>
        );
    }
}


