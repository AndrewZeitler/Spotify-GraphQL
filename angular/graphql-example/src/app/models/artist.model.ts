import { ImageObject } from "./image.model";

export interface Artist {
    id: String;
    name: String;
    images: ImageObject[]
    genres: String[]
}

export interface FullArtist {
    id: String;
    name: String;
    images: ImageObject[]
    genres: String[]
    popularity: number;
    href: String;
    type: String;
    uri: String;
}