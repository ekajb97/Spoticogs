import React from 'react';

var Discogs = require('disconnect').Client;


var db = new Discogs().database();
db.getRelease(12353785, function(err, data){
    console.table(data);
    var name = data;
    return name;
});

db.getRelease(12353785)
    .then(function(release){
        return db.getArtist(release.artists[0].id);
    })
    .then(function(artist){
        console.log(artist.name);
    });


export default class test extends React.Component{




    render() {
        return (
            <div> testing</div>
        )
    }
}
