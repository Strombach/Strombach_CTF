const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/indexRouter"));
app.use("/login", require("./routes/loginRouter"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("<h2>404: Not found</h2>");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}...`);
});
