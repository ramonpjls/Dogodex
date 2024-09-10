import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styles from './favories.module.css'
import { Typography } from '@mui/material';

const FavoritesPage = () => {
    const favorites = useSelector((state: RootState) => state.favorites.images);

    return (
        <div className={styles.favoriteContainer}>
            <Typography variant="h1" component="h2" className={styles.title}>Your Favorite Dog Images</Typography>
            <ul className={styles.imageList}>
                {favorites.map(image => (
                    <li className={styles.imageItem} key={image}>
                        <img className={styles.imageItem} src={image} width={200} height={200} alt="Favorite" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesPage;