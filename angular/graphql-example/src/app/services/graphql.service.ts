import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'

export const TOP_FIELDS = gql`
    query GetTop($amount: Int!) {
        topTracks(amount: $amount) {
            id
            name
            album {
                id
                name
                release_date
                images {
                    height
                    width
                    url
                }
            }
        }
        topArtists(amount: $amount) {
            id
            name
            images {
                width
                height
                url
            }
            genres
        }
    }
`

export const TOP_FULL_FIELDS = gql`
    query GetTracks($amount: Int!) {
        topTracks(amount: $amount) {
            id
            name
            album {
                id
                name
                release_date
                release_date_precision
                images {
                    width
                    height
                    url
                }
                album_group
                album_type
                available_markets
                href
                type
                uri
            }
            disc_number
            duration_ms
            explicit
            href
            is_local
            is_playable
            popularity
            preview_url
            track_number
            type
            uri
        }
        topArtists(amount: $amount) {
            id
            name
            images {
                width
                height
                url
            }
            genres
            popularity
            href
            type
            uri
        }
    }
`

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`

@Injectable()
export class GraphQLService {
    constructor(private apollo: Apollo) { }
      getTopFields(amount: number){
          return this.apollo.watchQuery({
              query: TOP_FIELDS,
              variables: {
                  amount: amount
              }
          }).valueChanges.pipe()
      }

      getTopFullFields(amount: number){
        return this.apollo.watchQuery({
            query: TOP_FULL_FIELDS,
            variables: {
                amount: amount
            }
        }).valueChanges.pipe()
    }

      logout(){
        return this.apollo.mutate({
            mutation: LOGOUT
        }).pipe()
      }
}