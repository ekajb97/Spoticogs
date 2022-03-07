# ![Spoticogs](https://github.com/ekajb97/Spoticogs/blob/master/src/images/logo.png)
Spoticogs is a web application that allows users to buy muisc albums from Discogs by accessing their top listened to songs from their Spotify accounts. This resulted in the name "Spoticogs" being a combination of Spotify and Discogs.

This project was created by Agata Lanecka, Alyssa Simbulan, Jake Byrne and Killian Flood, as a part of our CS322 Music Programming module.




# Running Spoticogs
- Enter auth-server
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



