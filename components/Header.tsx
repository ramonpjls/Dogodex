import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    const handleHome = () => {
        router.push('/breeds');
    };

    const handleFavorites = () => {
        router.push('/favorites');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    DogDex
                </Typography>
                <IconButton color="inherit" aria-label="home" onClick={handleHome}>
                    <HomeIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="favorites" onClick={handleFavorites}>
                    <FavoriteIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;