const env = process.env.NODE_ENV || 'db';
module.exports = {
  database: 'xlensherr',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `xlensherr-${env}.sqlite`,
    define: {
      underscored: true,
    },
    logging: false,
  },
};
