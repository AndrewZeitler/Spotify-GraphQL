import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Artist, FullArtist } from 'src/app/models/artist.model';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {
  @Input() artist: Artist
  @Input() fullArtist: FullArtist

  constructor() { }

  getJsonArtist() {
    return JSON.stringify(this.artist, null, ' ');
  }

  getFullJsonArtist(){
    return JSON.stringify(this.fullArtist, null, ' ');
  }

  getArtistImage(){
    if(this.artist.images == null) return;
    return this.artist.images[0].url;
  }

  getArtistName(){
    return this.artist.name;
  }

  getArtistGenres(){
    if(this.artist.genres == null) return;
    return this.artist.genres.join(', ');
  }
}
