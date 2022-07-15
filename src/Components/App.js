import Header from './ui/header'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </div>
  );
}

export default App;
