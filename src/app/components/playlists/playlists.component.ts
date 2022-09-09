import { Component, OnInit } from '@angular/core';
import { MockPlaylists } from '../../mock-playlists';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlist = MockPlaylists;

  constructor() { }

  ngOnInit(): void {
  }

}
