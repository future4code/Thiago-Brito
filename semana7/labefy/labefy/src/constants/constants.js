export const config = {
  headers: {
    Authorization: "Thiago-Brito-jackson"
  }
};
export const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


export const tracks = 
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";

export const create =
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
// https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists


export const add =
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";

export const delette=
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId";

export const remove=
"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId";