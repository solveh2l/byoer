export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return Response.json({
        status: "active",
        message: "Escape room active!",
        theme: "Test Theme",
        puzzles: [
          "Puzzle 1: Find the hidden key",
          "Puzzle 2: Solve the riddle",
          "Puzzle 3: Decode the message"
        ]
      });
    }

    return new Response("Hello from Cloudflare Workers!\nAPI endpoints:\n- GET /api/hello - Get escape room status\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};