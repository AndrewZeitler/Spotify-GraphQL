import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from 'apollo-cache-inmemory';

import { TrackCardComponent } from './modules/track-card/track-card.component'
import { AppRoutingModule } from './app-router.module'
import { AuthorizationService } from './services/authorization.service'
import { CommonModule } from '@angular/common'
import { AppMainComponent } from './modules/main/app-main.component'
import { AppLoginComponent } from './modules/login/app-login.component'
import { ArtistCardComponent } from './modules/artist-card/artist-card.component'
import { GraphQLService } from './services/graphql.service'

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppLoginComponent,
    TrackCardComponent,
    ArtistCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:8080/graphql'
          }),
        }
      },
      deps: [HttpLink]
    },
    AuthorizationService,
    GraphQLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
