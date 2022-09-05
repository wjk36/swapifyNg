export interface Playlist {
  description: string,
  external_urls: {
    spotify: string,
  }
  followers: {
    href: string,
    total: number,
  },
  id: string,
  images: [{
    url: string,
    height: number,
    width: number,
  }],
  name: string,
  owner: {
    external_urls: {
      spotify: string,
    },
    followers: {
      total: number,
    },
    href: string,
    id: string,
    type: string,
    uri: string,
    display_name: string,
  },
  public: boolean,
  snapshot_id: string,
  tracks: {
    total: number,
  }
  type: string,
  uri: string,
}
