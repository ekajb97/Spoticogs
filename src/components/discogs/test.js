import React from 'react';
import axios from 'axios';

var Discogs = require('disconnect').Client;
var consumerKey = 'gropdjhgfQQWBoVmCokp'
var consumerSecret = 'grNqFcJJFkfarIuSAdbWECHemNeoSPOC'

// Authenticate by user token
var dis1 = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });


var dis3 = new Discogs('MyUserAgent/1.0', { userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });

var db = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' }).database();

var id;


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
                console.log(obj.results[0].master_id)
                id = obj.results[0].master_id;
            });
    }
    render() {
        return (
            <div>
                {id}
            </div>,
            <div>
                <button onClick={this.getDisc}>I'm Discogs</button>
            </div>

        );
    }
}

export default Disco;

