import React from 'react';
import axios from 'axios';

var Discogs = require('disconnect').Client;
var consumerKey = 'gropdjhgfQQWBoVmCokp'
var consumerSecret = 'grNqFcJJFkfarIuSAdbWECHemNeoSPOC'


// Authenticate by user token
var dis1 = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });

// Authenticate by consumer key and secret
var dis2 = new Discogs({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret
});

var dis3 = new Discogs('MyUserAgent/1.0', {userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC'});
/*
state = {
    name: '',
}

handleChange = event => {
    this.setState({ name: event.target.value });
}

handleSubmit = event => {
    event.preventDefault();
    const user = {
        name: this.state.name
    };

    axios.post(`https://api.discogs.com/oauth/access_token`, {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}
*/

var db = new Discogs().database();
db.getRelease(12353785, function (err, data) {
    console.table(data);
    var name = data;
    return name;
});

db.getRelease(12353785)
    .then(function (release) {
        return db.getArtist(release.artists[0].id);
    })
    .then(function (artist) {
        console.log(artist.name);
    });

class Disco extends React.Component {
    render() {
        return (
            <div>
                <button>I'm Discogs</button>
            </div>
        );
    }
}

export default Disco;

function searchDisc() {

    // https://www.discogs.com/developers/#page:authentication,header:authentication-request-token-url

}
