import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { provide, ref, reactive} from 'vue';
import { differenceInCalendarDays } from 'date-fns';

// Choose one of the following:
const api = SpotifyApi.withClientCredentials(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID, 
    import.meta.env.VITE_SPOTIFY_SECRET
);

// Genres languages can pick from based on their category
const genreGroups = {
    'low-level': ['heavy-metal', 'punk-rock', 'anime', 'industrial'],
    'enterprise': ['classical', 'ambient', 'acoustic', 'disney'],
    'high-level': ['electronic', 'deep-house', 'progressive-house', 'synth-pop', 'techno'],
    'functional': ['alternative', 'anime', 'chicago-house', 'deep-house', 'garage', 'jazz'],
    'esolang': ['k-pop', 'j-pop', 'minimal-techno', 'new-age', 'post-dubstep']
}

// Genres that get sprinkled in based on how close to deadline we are
const deadlineGroups = {
    'far': ['happy', 'indie-pop', 'chill', 'classical', 'rainy-day', 'jazz'],
    'near': ['pop', 'pop-dubstep', 'work-out', 'trip-hop', 'rock-n-roll', 'study', 'jazz'],
    'immediate': ['hardstyle', 'hardcore', 'hard-rock', 'drum-and-bass', 'party']
}

// Map the groups to languages
const langTags = {
    'Rust': 'low-level',
    'C': 'low-level',
    'C++': 'low-level',
    'B': 'low-level',
    'D': 'low-level',
    'Go': 'low-level',
    'Assembly': 'low-level',
    'Zig': 'low-level',
    'Java': 'enterprise',
    'C#': 'enterprise',
    'Kotlin': 'enterprise',
    'Swift': 'enterprise',
    'Dart': 'enterprise',
    'Python': 'high-level',
    'Lua': 'high-level',
    'Ruby': 'high-level',
    'JS': 'high-level',
    'TS': 'high-level',
    'PHP': 'high-level',
    'Haskell': 'functional',
    'Scala': 'functional',
    'F#': 'functional',
    'Elm': 'functional',
    'Erlang': 'functional',
    'Brainfuck': 'esolang'
}

const languages = [
    'Rust', 'C', 'JS', 
    'TS', 'Ada', 'B', 
    'D', 'Python', 'Haskell',
    'Scala', 'Java'];

export function initSpotify() {
    // Provider to give access to our API calls
    provide('LANGUAGES', langTags);
    // TODO: Put all the api funcs here in a ctx
}

// Our knobs:
// Tempo (Min, Max, Target)
// Popularity (Min, Max, Target) Indie switch?
//Danceability (Min, Max, Target) How much of a dance song it is
// Energy "" "" How energetic it is (Death Metal == HIGH energy)
// Acousticness/Speechiness, controls how much talking in song
// Valence, emotions. Closer to 1 == Happy, closer to 0, angry/sad

// Turn languages in Energy, Valnce, Acousticness, Danceability
// and Popularity

// Turn Due Date into the Tempo and maybe also the Energy
// Might need to run Due Date call multiple times if window is
// Too big (ie a playlist can prepare a days worth of songs)

function langsToParams(langs) {
    
}

// Calc the appropriate tempo and energy for songs between two dates
function dateToParams(startDate, endDate) {

}

function generatePlaylist(startDate, langs) {
    let diff = differenceInCalendarDays(startDate, new Date())
    const langGenres = langs.reduce(
        (genreList, currLang) => {
            let tag = langTags[currLang];
            genreGroups[tag].forEach(item => genreList.add(item))
            return genreList;
        }, new Set()
    );
    console.log(langGenres);
    // We now have how many chunks of days to gen
    // Threshold the deadline by # of days left
    for (let i = diff; i >= 0; i--) {
        if (i > 5) {
            // Chill, we have time
        } else if (i > 2) {
            // Times ramping up but we have a little bit
        } else {
            // It's do or die
        }
    }
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



export function makeSpotifyCall(opts) {
    console.log(opts)
    // Do all handling here
    //testSpotify2();
    generatePlaylist(opts.date, opts.langs)
}