import React from 'react';

var Discogs = require('disconnect').Client;


// Authenticate by user token

var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();

class Disco extends React.Component {

    getDisc() {
        var searchParams = {
            release_title: 'Vulture Culture',
            artist: 'Fangclub',
            type: 'master'


        };
        db.search(searchParams)
            .then(function (obj) {
                console.log(obj)
                console.log("Discogs master ID needed for Marketplace Search: " + obj.results[0].master_id)
                id = obj.results[0].master_id;
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.getDisc}>I'm Discogs</button>
            </div>
        );
    }
}

export default Disco;

