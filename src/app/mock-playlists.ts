import { Playlists } from './playlists/playlists';

export const MockPlaylists: Playlists =
  {
    "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
    "items": [
      {
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "id": "string",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "height": 300,
            "width": 300
          }
        ],
        "name": "Mock Playlist",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "total": 4
        },
        "type": "string",
        "uri": "string"
      },
      {
        "description": "string",
        "external_urls": {
          "spotify": "string"
        },
        "followers": {
          "href": "string",
          "total": 0
        },
        "id": "string",
        "images": [
          {
            "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "height": 300,
            "width": 300
          }
        ],
        "name": "Mock Playlist 2",
        "owner": {
          "external_urls": {
            "spotify": "string"
          },
          "followers": {
            "total": 0
          },
          "href": "string",
          "id": "string",
          "type": "user",
          "uri": "string",
          "display_name": "string"
        },
        "public": true,
        "snapshot_id": "string",
        "tracks": {
          "total": 8
        },
        "type": "string",
        "uri": "string"
      }
    ],
    "limit": 20,
    "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "offset": 0,
    "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
    "total": 4
  };
