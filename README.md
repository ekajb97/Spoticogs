# Running Spoticogs
- Enter auth-server/app.js
- Enter secret id (line 16)
- Enter your spotify username
- In auth server folder run 
'''
node authorization_code/app.js
'''
- Open a new terminal window.
- Go to client folder.
- Run the following command:
'''
npm start
'''
- Navigate to http://localhost:3000 (if it doesn't open automatically)
- Click Login with Spotify
- Enter Login details.

After this you will be automatically redirected to the Spoticogs homepage with
an access token.
# Spotify
Spoticogs accesses the users Spotify information to provide a personalised experience.
Spotify information is used to find items in Discogs relating to the users Spotify
information and return items such as records, cd's, etc. that the user may find interesting.

## Permissions

This app requires use of a select amount of permissions to function properly.
Users grant these permissions to Spoticogs when they log in to Spotify and
authenticate their account. The permissions granted to Spoticogs are listed
below.

### user-read-private 
Read access to user’s subscription details (type of user account).
More info [here](https://developer.spotify.com/documentation/general/guides/scopes/#user-read-private).

### user-read-email
Read access to user's email address.
More info [here](https://developer.spotify.com/documentation/general/guides/scopes/#user-read-email).

### user-top-read
Read access to a user's top artists and tracks.
More info [here](https://developer.spotify.com/documentation/general/guides/scopes/#user-top-read).

# TODO
## Spotify
- Redirect to main app with access token once the user has authenticated with
Spotify and granted permission to Spoticogs.
- Query for users top tracks & artists.
- Return query in useable format for Discogs. 


