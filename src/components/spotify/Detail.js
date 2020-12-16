import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link
} from "react-router-dom";
var Discogs = require('disconnect').Client;
// Authenticate by user token
var dis1 = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });
var dis3 = new Discogs('MyUserAgent/1.0', { userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });
var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();

var format = 'Vinyl';
//var id;

const Detail = ({album, artists, name}, id ) => {
        //var id;
        var searchParams = {
            release_title: album.name,
            artist: artists[0].name,
            type: 'master'
    };
        db.search(searchParams)
            .then(function (obj) {
                console.log(obj)
                id = (obj.results[0].master_id).toString();
                console.log(id)

            });




    return (
        <div className="offset-md-1 col-sm-4" >
            <div className="row col-sm-12 px-0">
                <img
                    src={album.images[0].url}
                    alt={name}>
                </img>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={album.name}  className="form-label col-sm-12">
                    {album.name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={artists[0].name}  className="form-label col-sm-12">
                    {artists[0].name}

                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <div>
                    <a href= {"https://www.discogs.com/sell/list?master_id="+ {id} +"&ev=mb&format="+format} >Buy Here!</a>

                </div>

            </div>
        </div>
    );
}

export default Detail;
