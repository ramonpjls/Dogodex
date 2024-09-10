import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './breedItems.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreedImagesPage = () => {
    const [images, setImages] = useState<string[]>([]);
    const [favorites, setFavorites] = useState<string[]>([]); // Local state for favorites
    const router = useRouter();
    const { breed } = router.query;

    useEffect(() => {
        const fetchImages = async () => {
            if (breed) {
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
                const data = await response.json();
                setImages(data.message);
                const storedFavorites = localStorage.getItem('breedFavorites');
                if (storedFavorites) {
                    try {
                        setFavorites(JSON.parse(storedFavorites));
                    } catch (error) {
                        console.error('Error parsing stored favorites:', error);
                    }
                }
            }
        };

        fetchImages();
    }, [breed]);




    const toggleFavorite = (image: string) => {
        const updatedFavorites = favorites.includes(image)
            ? favorites.filter((fav) => fav !== image)
            : [...favorites, image];
        setFavorites(updatedFavorites);
        toast.info('Favorite list updated')
        localStorage.setItem('breedFavorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className={styles.breedImagesContainer}>
            <Typography variant="h1" component="h2" className={styles.title}>
                {breed} Images{' '}
            </Typography>
            <ul className={styles.imageList}>
                {images.map((image) => (
                    <li className={styles.imageItem} key={image}>
                        <img
                            className={styles.imageItem}
                            src={image}
                            width={200}
                            height={200}
                            alt="Favorite"
                        />
                        <button onClick={() => toggleFavorite(image)}>
                            {favorites.includes(image) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </button>
                    </li>
                ))}
            </ul>
            <ToastContainer />
        </div>
    );
};

export default BreedImagesPage;