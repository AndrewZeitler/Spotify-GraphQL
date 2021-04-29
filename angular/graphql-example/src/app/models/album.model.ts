import { ImageObject } from "./image.model";

export interface Album {
    id: String;
    label: String;
    release_date: String;
    images: ImageObject[];
}