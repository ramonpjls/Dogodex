import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { RootState } from '../../store/store';
import { useRouter } from 'next/router';
import styles from './breedItems.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';

const BreedImagesPage = () => {
    const [images, setImages] = useState<string[]>([]);
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.images);
    const router = useRouter();
    const { breed } = router.query;

    useEffect(() => {
        if (breed) {
            fetch(`https://dog.ceo/api/breed/${breed}/images`)
                .then(response => response.json())
                .then(data => setImages(data.message));
        }
    }, [breed]);

    const toggleFavorite = (image: string) => {
        if (favorites.includes(image)) {
            dispatch(removeFavorite(image));
        } else {
            dispatch(addFavorite(image));
        }
    };

    return (
        <div className={styles.breedImagesContainer}>
            <Typography variant="h1" component="h2" className={styles.title}>{breed} Images </Typography>
            <ul className={styles.imageList}>
                {images.map(image => (
                    <li className={styles.imageItem} key={image}>
                        <img className={styles.imageItem} src={image} width={200} height={200} alt="Favorite" />
                        <button onClick={() => toggleFavorite(image)}>
                            {favorites.includes(image) ? <FavoriteIcon /> : < FavoriteBorderIcon />}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BreedImagesPage;