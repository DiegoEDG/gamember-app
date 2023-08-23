import { useQuery } from '@tanstack/react-query';
import { FetchGamesProps, fetchGames } from '../services';
import { Game } from '../interfaces';

export const useFetchGames = ({ page, pageSize }: FetchGamesProps) => {
	const queryGames = useQuery<Game[], Error>({
		queryKey: ['games', page, pageSize],
		queryFn: () => fetchGames({ page, pageSize }),
		refetchOnWindowFocus: false
	});

	return queryGames;
};
