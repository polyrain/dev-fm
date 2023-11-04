import { SpotifyApi } from '@spotify/web-api-ts-sdk';

// Choose one of the following:
const api = SpotifyApi.withClientCredentials(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID, 
    import.meta.env.VITE_SPOTIFY_SECRET
);

export async function testSpotify() {
    const items = await api.search('The Beatles', ["artist"]);
    console.table(items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
    })));
}


export function testSpotify2() {
    api.search('The Beatles', ["artist"]).then(
        (items) => {
            console.table(items.artists.items.map((item) => ({
                name: item.name,
                followers: item.followers.total,
                popularity: item.popularity,
            })));
        }
    );
    
}



export function makeSpotifyCall(e) {
    console.log(e)
    // Do all handling here
    testSpotify2();
}