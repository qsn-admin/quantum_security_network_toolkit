const express = require('express');
const app = express();
app.use(express.json());

app.get('/public-api/v1/status', (req, res) => {
  res.json({ corridor: 58.5, alive: true });
});

app.post('/public-api/v1/query', (req, res) => {
  res.json({ ok: true, query: req.body.query, result: { sample: 'data' } });
});

app.post('/public-api/v1/actions', (req, res) => {
  res.json({ ok: true, action: req.body.action, status: 'accepted' });
});

app.get('/public-api/v1/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.write('retry: 10000\n\n');
  let i = 0;
  const t = setInterval(() => {
    i++;
    res.write(`data: ${JSON.stringify({ message: 'mock event ' + i })}\n\n`);
    if (i>100) { clearInterval(t); res.end(); }
  }, 1000);
});

const port = 3002;
app.listen(port, () => console.log(`Mock gateway running at http://localhost:${port}`));
