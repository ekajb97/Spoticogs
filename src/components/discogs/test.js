import React from 'react';

var Discogs = require('disconnect').Client;


// Authenticate by user token

var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();

class Disco extends React.Component {

    getDisc() {
        var searchParams = {
            release_title: 'nevermind',
            artist: 'nirvana'

        };
        db.search(searchParams)
            .then(function (obj) {
                console.log(obj)
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

