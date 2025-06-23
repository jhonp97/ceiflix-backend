import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET ,
  mongoURI: process.env.MONGO_URI,
  tmdbKey: process.env.TMDB_API_KEY,
  tmdbAccessToken: process.env.TMDB_ACCESS_TOKEN
};
