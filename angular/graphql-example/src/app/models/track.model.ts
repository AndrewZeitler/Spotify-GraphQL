import { Album } from './album.model'

export interface Track {
    id: String;
    name: String;
    album: Album;
}

export interface FullTrack {
    id: String;
    name: String;
    album: Album;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    href: String;
    is_local: boolean;
    is_playable: boolean;
    popularity: number;
    preview_url: String;
    track_number: number;
    type: String;
    uri: String;
}