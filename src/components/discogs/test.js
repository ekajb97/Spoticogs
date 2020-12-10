import React from 'react';
import axios from 'axios';

var Discogs = require('disconnect').Client;
var consumerKey = 'gropdjhgfQQWBoVmCokp'
var consumerSecret = 'grNqFcJJFkfarIuSAdbWECHemNeoSPOC'

// Authenticate by user token
var dis1 = new Discogs({ userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });


var dis3 = new Discogs('MyUserAgent/1.0', { userToken: 'emQcmnEHCrfaCCcxwTrVFhvEdRckNgIfiImhaGQC' });

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
/*
function searchDisc() {

    // https://www.discogs.com/developers/#page:authentication,header:authentication-request-token-url

}
/*
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
    */

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
