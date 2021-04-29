package com.graphqljava.spotifyapi.SpotifyObjects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ArtistObject {
    public String id;
    public String name;
    public String[] genres;
    public String href;
    public ImageObject[] images;
    public int popularity;
    public String type;
    public String uri;
    public ExternalUrlObject external_urls;
    public FollowersObject followers;
}
