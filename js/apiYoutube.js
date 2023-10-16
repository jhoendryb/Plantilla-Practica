const url = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=cat&geo=US&lang=en';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};

const test = async function () {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

test();
