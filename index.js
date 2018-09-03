const logger = require('winston');
const app = require('./app');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({status: 'xlensherr is up and running'});
});

app.listen(port, () => {
  logger.info(`xlensherr is running on port ${port}`);
});
