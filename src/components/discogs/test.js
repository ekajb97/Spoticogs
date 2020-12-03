import React from 'react';
var Discogs = require('disconnect').Client;

// Authenticate by user token
var dis = new Discogs({userToken: 'YOUR_USER_TOKEN'});

// Authenticate by consumer key and secret
var dis = new Discogs({
    consumerKey: 'gropdjhgfQQWBoVmCokp',
    consumerSecret: 'grNqFcJJFkfarIuSAdbWECHemNeoSPOC'
});


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


/*
var Discogs = require('disconnect').Client;


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


export default class test extends React.Component {

    render() {
        return (
            <div>testing</div>
        )
    }
}
*/
