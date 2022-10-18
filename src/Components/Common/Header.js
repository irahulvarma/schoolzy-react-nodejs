import AppBar from '@mui/material/AppBar';
import { Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {

    return (
        
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography sx={{ flex: 1 }}>
                        SchoolZy
                    </Typography>
                    <Link to="/login"><Button variant="contained" color="success">Login</Button></Link>
                </Toolbar>
            </Container>
        </AppBar>
        
    );
}

export default Header;