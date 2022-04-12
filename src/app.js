console.log('Hallo daar!');

import axios from 'axios';

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchJoke();