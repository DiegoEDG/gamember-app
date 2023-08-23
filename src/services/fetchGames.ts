import { Game, Response } from '../interfaces';
import { api } from '../libs';

export interface FetchGamesProps {
	page: number;
	pageSize: number;
}

export const fetchGames = async ({ page, pageSize }: FetchGamesProps): Promise<Game[]> => {
	const response = await api.get<Response>(`/games?page=${page}&page_size=${pageSize}`);
	const games = response.data.results;

	return games;
};
