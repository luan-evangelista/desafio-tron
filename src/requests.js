import md5 from 'js-md5';
import api from './services/api';
import {setList} from './store/modules/heros/actions';

const PUBLIC_KEY = '1bfe13ab18520b686885204a40254d4e';
const PRIVATE_KEY = 'f444f9af632011b67abd12215646958fbfbf682a';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const getHeros = () => async dispatch => {
  console.tron.log('chamou');
  const response = await api.get(
    `characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  );
  dispatch(setList(response.data.data.results));
};
