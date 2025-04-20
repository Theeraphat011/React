const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
   windowMs: 5 * 1000,
   max: 2,
   message: {
      msg: "Too many accounts created from IP, please try again after 15 minutes.",
   },
   standardHeaders: true,
   legacyHeaders: false,
});

module.exports = authLimiter;
