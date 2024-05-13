const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use(express.json());

app.use('/users', authRoutes);
app.use('/news', newsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
