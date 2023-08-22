import { useEffect, useState } from 'react';
import { fetchGames } from '../services';
import { Game } from '../interfaces/Response';
import styles from './HomePage.module.css';
import { GameCard } from '../components';

const HomePage = () => {
	const [games, setGames] = useState<Game[]>([]);
	useEffect(() => {
		fetchGames({ page: 2, pageSize: 12 }).then((res) => setGames(res));
	}, []);

	return (
		<div className={styles.mainContainer}>
			<section className={styles.cardContainer}>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</section>
		</div>
	);
};

export default HomePage;
