import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Typography } from '@mui/material';

function Header() {

    return (
        
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography>
                        SchoolZy
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
        
    );
}

export default Header;