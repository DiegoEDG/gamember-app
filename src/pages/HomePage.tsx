import { GameCard, Loader } from '../components';
import { useFetchGames } from '../hooks';
import styles from './HomePage.module.css';

const HomePage = () => {
	const queryGames = useFetchGames({ page: 1, pageSize: 12 });
	return (
		<div className={styles.mainContainer}>
			<section className={styles.cardContainer}>
				{queryGames.data ? queryGames.data.map((game) => <GameCard key={game.id} game={game} />) : <Loader />}
			</section>
		</div>
	);
};

export default HomePage;
