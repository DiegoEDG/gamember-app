import axios from 'axios';
import { baseURL } from '../constants/api';

export const api = axios.create({
	baseURL,
	params: {
		key: import.meta.env.VITE_API_KEY
	}
});
