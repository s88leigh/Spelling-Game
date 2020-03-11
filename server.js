const express = require("express");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the Vue app build directory so that front end can have access
app.use(express.static(path.join(__dirname, "client/dist")));

//Put all routes above here. catches all. serves index-html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
