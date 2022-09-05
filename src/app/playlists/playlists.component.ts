import { Component, OnInit } from '@angular/core';
import { MockPlaylists } from '../mock-playlists';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlist = MockPlaylists;

  constructor() { }

  ngOnInit(): void {
  }

}
