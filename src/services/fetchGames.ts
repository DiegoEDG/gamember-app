import { Game, Response } from '../interfaces';
import { api } from '../libs';

interface Props {
	page: number;
	pageSize: number;
}

export const fetchGames = async ({ page, pageSize }: Props): Promise<Game[]> => {
	const response = await api.get<Response>(`/games?&page=${page}&page_size=${pageSize}`);
	const games = response.data.results;

	return games;
};
