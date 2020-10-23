const fastify = require("fastify");
const { getUniversities } = require("thai-university");

function build() {
  const app = fastify({
    logger: true,
  });

  app.get("/", async (req, res) => {
    return getUniversities();
  });

  return app;
}

module.exports = build;
