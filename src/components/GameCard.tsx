import { Game } from '../interfaces';
import styles from './GameCard.module.css';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<article className={styles.card} key={game.id}>
			<div className={styles.textContainer}>
				<p>{game.name}</p>
				<p>{game.released.slice(0, 4)}</p>
			</div>
			<img className={styles.img} src={game.background_image} alt={game.name} />
		</article>
	);
};

export default GameCard;
