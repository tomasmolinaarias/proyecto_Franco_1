exports.load = (app) => {
  /* BACKEND */
  app.use("/api/v1", require("./api.route"));
  // redirect Api
  app.use("*", (req, res) => res.redirect("/api/v1/product"));
};
