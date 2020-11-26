import React from 'react';


/*
class Disco extends React.Component {
    render() {
        return (
            <div>
                <button>I'm Discogs</button>
            </div>
        );
    }
}

default export Disco;
*/


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
