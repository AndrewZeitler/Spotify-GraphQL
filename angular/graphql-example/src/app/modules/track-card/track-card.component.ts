import { Input, Component } from '@angular/core';
import { FullTrack, Track } from '../../models/track.model'

@Component({
  selector: 'track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent {
  @Input() track: Track
  @Input() fullTrack: FullTrack

  constructor() { }

  getJsonTrack() {
    return JSON.stringify(this.track, null, ' ');
  }

  getFullJsonTrack(){
    return JSON.stringify(this.fullTrack, null, ' ');
  }

  getTrackImg(){
    if(this.track.album.images == null) return;
    return this.track.album.images[0].url;
  }

  getTrackTitle(){
    return this.track.name;
  }

  getTrackAlbumTitle(){
    return this.track.album.label;
  }

  getTrackReleaseDate(){
    return this.track.album.release_date.split('-')[0];
  }
}
