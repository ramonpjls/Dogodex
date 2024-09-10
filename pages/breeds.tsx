import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './BreedsPage.module.css'; // Importa los estilos
import { Typography } from '@mui/material';

const BreedsPage = () => {
    const [breeds, setBreeds] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => setBreeds(Object.keys(data.message)));
    }, []);

    const handleBreedClick = (breed: string) => {
        router.push(`/breed/${breed}`);
    };

    return (
        <div className={styles.container}>
            <Typography variant="h1" component="h2" className={styles.title}>Dog Breeds</Typography>
            <ul className={styles.breedsList}>
                {breeds.map(breed => (
                    <li
                        key={breed}
                        className={styles.breedItem}
                        onClick={() => handleBreedClick(breed)}
                    >
                        <Typography variant="caption" component="span">{breed}</Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BreedsPage;