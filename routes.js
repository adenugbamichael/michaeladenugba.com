const routes = require("next-routes-extended")

// const routes = require("next-routes")

module.exports = routes()
  .add("portfolio", "/portfolio/:id")
  .add("portfolioEdit", "/portfolios/:id/edit")
  .add("userBlogs", "/blogs/dashboard")
  .add("blogEditor", "/blogs/new")
  .add("blogDetail", "/blogs/:slug")
  .add("blogEditorUpdate", "/blogs/:id/edit")
