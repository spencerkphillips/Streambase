const jwt = require("jsonwebtoken");
exports.createJWT = (email, username, userId, duration) => {
    const payload = {
        email,
        username,
        userId,
        duration
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: duration,
    });
};