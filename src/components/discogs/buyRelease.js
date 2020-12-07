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
