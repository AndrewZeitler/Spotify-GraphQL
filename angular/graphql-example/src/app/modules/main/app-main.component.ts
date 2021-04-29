import { Component, OnInit } from '@angular/core';
import { FullTrack, Track } from '../../models/track.model'
import { AuthorizationService } from '../../services/authorization.service';
import { GraphQLService } from 'src/app/services/graphql.service';
import { Artist, FullArtist } from 'src/app/models/artist.model';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  title = 'graphql-example';
  tracks: Track[] = null;
  fullTracks: FullTrack[] = null;
  artists: Artist[] = null;
  fullArtists: FullArtist[] = null;
  displayAmount = 10;

  constructor(private authorizationService: AuthorizationService,
              private graphQLService: GraphQLService){ }

  ngOnInit(){
    if(this.authorizationService.access_token == null) {
        this.authorizationService.login();
    }
    
    this.updateView()
  }

  logout() {
    this.authorizationService.access_token = null;
    this.graphQLService.logout().subscribe(result => {
      if(result['data']['logout']) {
        window.location.reload();
      }
    });
  }

  displayAmountChanged(event: any){
    this.displayAmount = parseInt(event.srcElement.value);
    if(this.displayAmount > 0){
      this.updateView()
    }
  }

  updateView() {
    this.graphQLService.getTopFields(this.displayAmount).subscribe(result => {
      console.log(result);
      this.artists = result.data['topArtists'] as Artist[];
      this.tracks = result.data['topTracks'] as Track[];
    });
    this.graphQLService.getTopFullFields(this.displayAmount).subscribe(result => {
      console.log(result);
      this.fullTracks = result.data['topTracks'] as FullTrack[];
      this.fullArtists = result.data['topArtists'] as FullArtist[];
    });
  }
}
