const express = require("express");

const app = express()

const PORT = process.env.PORT

// Routes
app.use('/', require('./routes/indexRouter'));

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h2>404: Not found</h2>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}...`)
})
