const express = require('express');
const app = express();
const homeroutes = require('./routes/homeroutes');

//middleware
app.use('/', homeroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

