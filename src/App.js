import './App.css';
import Disco from './components/discogs/test';
import Buy from './components/discogs/buyRelease';
import SpotifyMisc from './components/spotify/SpotifyMisc';
import React from "react";
import axios from "axios";
import qs from 'qs';
import ReactLogo from './images/logo.png';
import Table from 'react-bootstrap/Table'


export default class App extends React.Component {
    state = {
        user: null,
        error: null,
        spotify:[],
        //authenticated:null
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ReactLogo} alt="React Logo" />
                </header>
                <div>
                    <SpotifyMisc />
                    <Disco />
                    <Buy />
                </div>
                <table id={"display"}>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            Artist
                        </th>
                        <th>
                            Song
                        </th>
                        <th>
                            Album
                        </th>
                        <th>
                            Buy
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img id={"image"} src="https://img.discogs.com/csUAB1ED0-Sypjlu02U7qHN7UrA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12353785-1533547532-2071.jpeg.jpg" alt="Fangclub - True Love EP" ></img>
                        </td>
                        <td>
                            Fangclub
                        </td>
                        <td>
                            Knife
                        </td>
                        <td>
                            True Love EP
                        </td>
                        <td>
                            <div className={"button"}>
                                <a href={"https://www.discogs.com/sell/list?master_id=" + "12353785" + "&ev=mb&format=" + "Vinyl"} >Buy Here!</a>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}



