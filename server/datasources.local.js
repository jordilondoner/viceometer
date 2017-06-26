const mongodbUrl = process.env.MONGODB_URL;

if (mongodbUrl) {
  console.warn(`Using MongoDB url: ${mongodbUrl}`);

  const dataSources = {
    db: {
      name: 'db',
      connector: 'mongodb',
      url: mongodbUrl,
    },
  };

  module.exports = dataSources;
}
