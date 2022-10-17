import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Typography } from '@mui/material';

function Footer() {

    return (
        
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography>
                        Footer
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
        
    );
}

export default Footer;