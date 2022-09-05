import { Playlist } from './playlist/playlist';

export const MockPlaylists: Playlist[] = [
  {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [
      {}
    ],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  }
];
