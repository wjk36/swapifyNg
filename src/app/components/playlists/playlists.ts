import { Playlist } from './playlist';

export interface Playlists {
  href: string,
  items: Playlist[],
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
}
