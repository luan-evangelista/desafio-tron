import md5 from 'js-md5';
import axios from 'axios';

const PUBLIC_KEY = '1bfe13ab18520b686885204a40254d4e';
const PRIVATE_KEY = 'f444f9af632011b67abd12215646958fbfbf682a';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
    baseURL:`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
});
    
export default api;