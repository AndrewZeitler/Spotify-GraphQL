package com.graphqljava.spotifyapi.SpotifyObjects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TrackObject {
    public String id;
    public SimplifiedAlbumObject album;
    public String name;
    public ArtistObject[] artists;
    public String[] available_markets;
    public int disc_number;
    public int duration_ms;
    public boolean explicit;
    public String href;
    public boolean is_local;
    public boolean is_playable;
    public int popularity;
    public String preview_url;
    public int track_number;
    public String type;
    public String uri;
}


