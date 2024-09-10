import styles from './favories.module.css';
import { Typography } from '@mui/material';

const FavoritesPage = () => {
    const storedFavorites = localStorage.getItem('breedFavorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    return (
        <div className={styles.favoriteContainer}>
            <Typography variant="h1" component="h2" className={styles.title}>
                Your Favorite Dog Images
            </Typography>
            <ul className={styles.imageList}>
                {parsedFavorites.map((image: string) => (
                    <li className={styles.imageItem} key={image}>
                        <img className={styles.imageItem} src={image} width={200} height={200} alt="Favorite" />
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default FavoritesPage;