const baseURL = 'https://api.unsplash.com';
const headers = {
    'Content-Type': 'application/json',
    Authorization:'Client-ID c9070f265e858465b3335f0d476c3c531e367f48ba384f282e879f134caa50c9'
}


async function fetchPictures (term) {
    console.log(`Searching for ${term}`);
    return fetch(`${baseURL}/search/photos/?query=${term}`, {
        method: 'GET',
        headers: headers
    }).catch(err => {
        console.error(err);
    })
}

export default fetchPictures;