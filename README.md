# back-end

base url: https://spotify-song-suggester1.herokuapp.com/api
All endpoints are prefixed with the baseurl + api

example url for users get request:
https://spotify-song-suggester1.herokuapp.com/api/users/

Registering a user - /auth/register

{ username: "", (required)
password: "", (required)
age: number, (optional)
gender: "", (optional)
location: "", (optional)
genre: "" (optional) } 

Login - /auth/login

{ username: "",
password: "" }

Get all users - /users

Get user by user id - /users/:id

Update user by id - /users/:id
can change any of the user values that were used to register with, including password.

Delete user by user id - /users/:id

Add favorite for a user by user id - /users/:id/favs
{ name: "", (required)
uri: "",
artist: "",
album: "",
spotify_id: "",
popularity: number from 0-100,
preview_url: "",
image: "" }

Get user favorites by user id - /users/:id/favs

Delete favorite by FAVORITE ID (not user id) - /favorites/:id

Get all favorites (all favorites for every user, not just an individual) - /favorites
