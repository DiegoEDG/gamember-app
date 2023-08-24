import { GameCard, Loader } from '../components';
import { useFetchGames } from '../hooks';
import styles from './HomePage.module.css';

const HomePage = () => {
	const queryGames = useFetchGames({ page: 1, pageSize: 12 });

	return (
		<section className={styles.mainContainer}>
			<article className={styles.cardContainer}>
				{queryGames.data ? queryGames.data.map((game) => <GameCard key={game.id} game={game} />) : <Loader />}
			</article>
		</section>
	);
};

export default HomePage;
