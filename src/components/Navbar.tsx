import { NavbarLine } from '../assets/svg';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navContainer}>
			<div>Logo</div>
			<div className={styles.menuContainer}>
				<a className={styles.link}>Home</a>
				<a className={styles.link}>Chest</a>
			</div>
			<NavbarLine />
			<NavbarLine />
		</nav>
	);
};

export default Navbar;
