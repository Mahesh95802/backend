require('dotenv').config();
const cors = require('cors');
const express = require('express');

const authValidator = require('./middlewares/auth.validator');
const contentTypeRouter = require('./routes/contentType.route');
const contentSchemaRouter = require('./routes/contentSchema.route');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use('/content-types', authValidator.verifyJWT, contentTypeRouter);
app.use('/schema/content-types', authValidator.verifyJWT, contentSchemaRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Backend Server is running on port ${PORT}`);
});