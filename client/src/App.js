import { useState } from 'react';
import { AppBar, Grid, Toolbar, Container, Button, TextField, Typography } from '@mui/material';

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setError(true);
    setResponse(`Checking oddity of '${input} is not implemented yet`);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Is It odd?
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs="12">
              <Typography variant="h6">Use our patented SaaS solution to find out</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Is it odd?"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Check
              </Button>
            </Grid>
            {response && (
              <Grid item xs="12">
                <Typography color={error ? 'red' : 'black'}>{response}</Typography>
              </Grid>
            )}
            <Grid item xs="12">
              <Typography variant="h6">Coming soon...</Typography>
              <Typography>
                <em>Is it even?</em> as a service
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default App;
