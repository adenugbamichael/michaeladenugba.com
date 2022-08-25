const { expressjwt: jwt } = require("express-jwt")
const jwksRsa = require("jwks-rsa")

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
