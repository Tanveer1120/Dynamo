const express = require("express");
const path = require("path");
const app = express();

// Load dynamic data
const projects = require("./data/projects.json");

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route
app.get("/", (req, res) => {
    res.render("index", {
        name: "Your Name",
        role: "Full Stack Developer",
        projects: projects
    });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});