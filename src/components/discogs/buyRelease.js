import React from 'react';
/*import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link
} from "react-router-dom";*/
const buyRelease = ({ album, artists, name }) => {
    const id = "70705";
    const format = "Vinyl";
    const release = "https://www.discogs.com/sell/list?master_id=" + id + "&ev=mb&format=" + format;

    return (

        <div>

            <div className="container">
                <form>
                    <label htmlFor="Format">Choose desired format: </label>

                    <select name="format" id="format" class="format">
                        <option value="Vinyl">Vinyl</option>
                        <option value="CD">CD</option>
                        <option value="Cassette">Cassette</option>
                    </select>
                    <div >
                        <button type='submit' >
                            Submit
                            </button>
                    </div>
                </form>
            </div>
            <div className={"button"}>

                <a href={"https://www.discogs.com/sell/list?master_id=" + id + "&ev=mb&format=" + format} >Buy Here!</a>

            </div>

        </div>

    );
}

export default buyRelease;


//for (var i = 0; i < response.items.length; i++) {
//	var song_info = {
//		song: response.items[i].name,
//		artist: response.items[i].artists[0].name,
//		album_name: response.items[i].album.name,
//		album_art: response.items[i].album.images[0]
//	}
//	music[i] = song_info;
//getDisc()
// 			 			{
// 			 				db.search({ release_title: this.state.music.album, artist: this.state.music.artist, type: 'master'})
// 			 					.then(function (obj) {
// 			 						console.log(obj)
// 			 						console.log("Discogs master ID needed for Marketplace Search: " + obj.results[0].master_id)
// 									this.setState({
// 										music: {
// 											id: obj.results[0].master_id
// 										}
// 										})
//
// 			 					});
// 			 			}
//}
