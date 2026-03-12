const jwt = require('jsonwebtoken');
// login
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let user = {
      username: "firstName",
      password: "lastName",
      role: "admin",
      id: "USERID",
    };
    if (username !== user.username) {
      return res.status(400).json({ message: "User not found" });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = {
      user: { id: user.id },
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
