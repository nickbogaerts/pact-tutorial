import express from 'express';
import isOdd from './is-odd';

const PORT = 3000;
const app = express();

app.get('/is-odd/:input?', isOdd);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
