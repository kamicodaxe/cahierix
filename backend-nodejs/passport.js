const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error('JWT_SECRET environment variable is not set.');
}

// JWT Strategy
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};

const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
    try {
        // pass the userId embeded in jwt payload as _id
        return done(null, { userId: payload._id });
    } catch (error) {
        console.error('Error authenticating user:', error);
        return done(error, false);
    }
})

passport.use(jwtStrategy);

module.exports = passport;