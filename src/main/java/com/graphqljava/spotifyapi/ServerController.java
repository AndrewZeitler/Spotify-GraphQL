package com.graphqljava.spotifyapi;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServerController {
    private static String spotifyAccessToken = "";

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    boolean login(@RequestBody String accessToken){
        spotifyAccessToken = accessToken;
        return true;
    }

    public static String getSpotifyAccessToken() {
        return spotifyAccessToken;
    }

    public static boolean logout(){
        spotifyAccessToken = "";
        return true;
    }
}
