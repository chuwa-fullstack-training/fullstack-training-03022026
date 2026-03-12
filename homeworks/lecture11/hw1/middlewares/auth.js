const jwt = require("jsonwebtoken");

// both logged-in user and anonymous user can access
function optionalJwt(req, res, next) {
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // if user has no token, or if this is an anonymous user, just let them go without adding user to req.
  if (!token) {
    return next();
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

// only logged-in user can access
function requireJwt(req, res, next) {
    // Get token from header
    const token =
      req.header('x-auth-token') ||
      req.headers?.authorization?.match(/^Bearer (.+)/)[1];
  
    // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }
  
    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Add user from payload
      req.user = decoded.user;
      // res.locals.user = decoded.user;
  
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }

module.exports = { optionalJwt,requireJwt };
