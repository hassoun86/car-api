const config = {
  app: {
    name: 'car-api',
    port: process.env.PORT as string,
    host: process.env.HOST as string,
  },
  db: {
    URL: process.env.MONGO_URL as string,
  },
};

export { config };