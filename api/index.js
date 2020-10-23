const fastify = require("fastify");

function build() {
  const app = fastify({
    logger: true,
  });

  app.get("/", async (req, res) => {
    return { status: "successful" };
  });

  return app;
}

module.exports = build;
