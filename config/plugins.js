module.exports = {
  jwtSecret: crypto.randomBytes(16).toString("base64"),
};
