const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")

const namespace = "http://localhost:3000/"

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true, // Default Value
    rateLimit: true,
    jwksRequestsPerMinute: 15,

    jwksUri: "https://dev-1x2k7k7q.us.auth0.com/.well-known/jwks.json",
  }),

  audience: "mKbvSvf823YOqNkGUzJUnktPNyQxxId5",
  issuer: "https://dev-1x2k7k7q.us.auth0.com/",
  algorithms: ["RS256"],
})

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user
  if (user && user[namespace + "role"] === role) {
    next()
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data",
    })
  }
}
