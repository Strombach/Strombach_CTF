const express = require("express");

const app = express()

const PORT = process.env.PORT


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/', require('./routes/indexRouter'));
app.use('/login', require('./routes/loginRouter'));

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h2>404: Not found</h2>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}...`)
})
