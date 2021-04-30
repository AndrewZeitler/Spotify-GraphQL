package com.graphqljava.spotifyapi;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.graphqljava.spotifyapi.SpotifyObjects.ArtistObject;
import com.graphqljava.spotifyapi.SpotifyObjects.ArtistPagingObject;
import com.graphqljava.spotifyapi.SpotifyObjects.TrackObject;
import com.graphqljava.spotifyapi.SpotifyObjects.TrackPagingObject;

public class SpotifyAPI {
    final static String client_id = "0ef8332626044b109dcd7da94f8fd798";
    final static String client_secret = "3c11752bbecc492aae598c6f8bf2a3f0";
    final static String scopes = "user-top-read";
    final static String redirect_uri = "http://localhost:4000/callback";

    public static TrackObject[] getTopTracks(int amount) {
        if(ServerController.getSpotifyAccessToken().equals("")) return null;
        try {
            URL url = new URL("https://api.spotify.com/v1/me/top/tracks?limit=" + amount);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Authorization", "Bearer " + ServerController.getSpotifyAccessToken());
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);
            
            ObjectMapper mapper = new ObjectMapper();
            mapper.configure(com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
            
            TrackPagingObject tracks = mapper.readValue(con.getInputStream(), TrackPagingObject.class);
            con.disconnect();

            return tracks.items;
        } catch(Exception e){
            return null;
        }
    }

    public static ArtistObject[] getTopArtists(int amount) {
        if(ServerController.getSpotifyAccessToken().equals("")) return null;
        try {
            URL url = new URL("https://api.spotify.com/v1/me/top/artists?limit=" + amount);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Authorization", "Bearer " + ServerController.getSpotifyAccessToken());
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);
            
            ObjectMapper mapper = new ObjectMapper();
            mapper.configure(com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
            
            ArtistPagingObject artists = mapper.readValue(con.getInputStream(), ArtistPagingObject.class);
            con.disconnect();

            return artists.items;
        } catch(Exception e){
            return null;
        }
    }
}
