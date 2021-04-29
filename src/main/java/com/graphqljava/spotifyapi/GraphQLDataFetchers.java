package com.graphqljava.spotifyapi;

import com.graphqljava.spotifyapi.SpotifyObjects.ArtistObject;
import com.graphqljava.spotifyapi.SpotifyObjects.TrackObject;

import org.springframework.stereotype.Component;
import graphql.schema.DataFetcher;

@Component
public class GraphQLDataFetchers {
    public DataFetcher<TrackObject[]> getTopTracks() {
        return dataFetchingEnvironment -> {
            return SpotifyAPI.getTopTracks(dataFetchingEnvironment.getArgument("amount"));
        };
    }

    public DataFetcher<ArtistObject[]> getTopArtists() {
        return dataFetchingEnvironment -> {
            return SpotifyAPI.getTopArtists(dataFetchingEnvironment.getArgument("amount"));
        };
    }

    public DataFetcher<Boolean> logout() {
        return dataFetchingEnvironment -> {
            return ServerController.logout();
        };
    }
}
