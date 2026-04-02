const jwt = require('jsonwebtoken');

const JWT_SECRET = 'lecture10_hw2_secret';

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        // no authorization header, return 401
        res.status(401).json({ error: 'Authorization header is required' });
        return;
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Invalid authorization header format' });
    }

    const [scheme, token] = parts;
    // check Bearer
    if (scheme !== 'Bearer') {
        return res.status(401).json({ error: 'Authorization scheme must be Bearer' });
    }

    if (!token) {
        res.status(401).json({ error: 'Token is required' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
}

function optionalAuth(req, res, next) {
    // read the authorization header from the request
    const authHeader = req.headers.authorization;
    // no authorization header
    if (!authHeader) {
        // No token, treat user as anonymous
        next();
        return;
    }
    // split(' ') -> make 'Bearer abc123xyz' to be ['Bearer', 'abc123xyz']
    // [0] is 'Bearer', [1] is 'abc123xyz' (the token)
    // const token = authHeader.split(' ')[1];

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Invalid authorization header format' });
    }

    const [scheme, token] = parts;

    if (scheme !== 'Bearer') {
        return res.status(401).json({ error: 'Authorization scheme must be Bearer' });
    }


    if (!token) {
        res.status(401).json({ error: 'Token is required' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
}

module.exports = { authenticateToken, optionalAuth };