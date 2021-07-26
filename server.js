const db = require('./db/connection');
const express = require('express');

// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');

// const { result } = require("lodash");
const inputCheck = require('./tests/inputCheck');
const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// Default response for anu other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });

