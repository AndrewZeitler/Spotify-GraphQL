package com.graphqljava.spotifyapi.SpotifyObjects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SimplifiedAlbumObject {
    public String id;
    public String name;
    public ArtistObject[] artists;
    public String album_group;
    public String album_type;
    public String[] available_markets;
    public String href;
    public String release_date;
    public String release_date_precision;
    public String type;
    public String uri;
    public ImageObject[] images;
}
