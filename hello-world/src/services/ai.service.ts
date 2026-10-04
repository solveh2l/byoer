export class AiService {
  private env: any;

  constructor(env: any) {
    this.env = env;
  }

  async getEscapeRoomResponse(prompt: string): Promise<{ theme: string; puzzles: string[] }> {
    if (this.env.AI) {
      try {
        const result = await this.env.AI.run(
          "@cf/meta/llama-3.1-8b-instruct",
          { prompt },
          { max_tokens: 512, temperature: 0.8 }
        );
        return {
          theme: result.response || "Escape Room",
          puzzles: [
            "Puzzle 1: Find the hidden key",
            "Puzzle 2: Solve the riddle",
            "Puzzle 3: Decode the message"
          ]
        };
      } catch (error) {
        console.error("AI error:", error);
      }
    }

    return {
      theme: "Default Escape Room",
      puzzles: [
        "Puzzle 1: Find the key",
        "Puzzle 2: Solve the code",
        "Puzzle 3: Unlock the door"
      ]
    };
  }
}