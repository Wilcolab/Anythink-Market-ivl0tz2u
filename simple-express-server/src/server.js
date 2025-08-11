const express = require('express');

const app = express();
const PORT = 8001;

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});