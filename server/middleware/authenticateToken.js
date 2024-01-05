const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : ''; // Extract the token from headers
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Token not provided' });
    }
  
    try {
      const decoded = jwt.verify(token, 'secret'); // Replace 'secret' with your actual secret key
  
      // Attach the decoded token to the request for later use if needed
      req.user = decoded;
  
      // Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
      if (decoded.exp < currentTime) {
        return res.status(403).json({ error: 'Forbidden: Token has expired' });
      }
  
      next(); // Move to the next middleware or route handler
    } catch (error) {
      console.error('Token verification error:', error);
      return res.status(401).json({ error: 'Forbidden: Invalid token' });
    }
  };

module.exports = { authenticateToken };