const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy, ExtractJwt } = passportJWT;
const config = require('./config'); 
const adminRoutes = require('./routes/adminRoutes');
const shoeRoutes = require('./routes/shoeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY,
};

const jwtStrategy = new Strategy(jwtOptions, (payload, done) => {
  
  
  done(null, payload);
});

passport.use(jwtStrategy);
app.use(passport.initialize());


app.use('/admin', adminRoutes);
app.use('/api', shoeRoutes);
app.use('/api', categoryRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
