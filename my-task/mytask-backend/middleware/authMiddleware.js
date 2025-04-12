const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
   const authHeader = req.headers.authorization;
   
   if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(400).json({ msg: "Not permitted" });
   }
   
   const token = authHeader.split(" ")[1];

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      next();
   } catch (err) {
      return res.status(400).json({ msg: "Token not found" });
   }
};

module.exports = authMiddleware;
