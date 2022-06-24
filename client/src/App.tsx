import React, { useState, FormEvent } from 'react';
import { AppBar, Grid, Toolbar, Container, Button, TextField, Typography } from '@mui/material';
import IsOddProvider from './IsOddProvider';

function App(): JSX.Element {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [response, setResponse] = useState('');

  const isOddProvider = IsOddProvider('http://localhost:3001');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const isOdd = await isOddProvider(input);
      setError(false);
      if (isOdd) {
        setResponse(`Remarkable! ${input} is indeed odd.`);
      } else {
        setResponse(`Sorry, ${input} does not seem to be odd.`);
      }
    } catch (e: any) {
      setError(true);
      setResponse(e?.message);
    }
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
            <Grid item xs={12}>
              <Typography variant="h6">Use our patented SaaS solution to find out</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Is it odd?"
                value={input}
                onChange={(e: FormEvent) => setInput((e.target as HTMLInputElement).value)}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Check
              </Button>
            </Grid>
            {response && (
              <Grid item xs={12}>
                <Typography color={error ? 'red' : 'black'}>{response}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
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
