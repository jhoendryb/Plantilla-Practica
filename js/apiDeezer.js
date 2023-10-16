// const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/editorial/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/comment/%7Bid%7D';
// const url = 'https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D';

async function apiDeezer(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}