// utils/redisClient.js
import Redis from 'redis';

const redisClient = Redis.createClient({
  url: 'redis://red-coo8knv79t8c73b8apr0:6379' // Adjust the URL as necessary
});

redisClient.connect().catch(console.error);

export default redisClient;
