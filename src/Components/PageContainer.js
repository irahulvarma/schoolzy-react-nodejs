import { Box, Container, Typography } from "@mui/material";

function PageContainer() {

    return (
        <Container fixed>
            <Box sx={{ height: '100vh'}}>
                <Typography variant="h2" my={3}>
                Join Live and Interactive Online Classes with the best Tutors
                </Typography>
            </Box>
        </Container>
    );
}

export default PageContainer;