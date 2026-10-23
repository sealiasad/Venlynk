import { aiInstructionsText } from "@/content/ai-instructions";

export const dynamic = "force-static";

/** Plain text profile for AI tools (llms.txt convention), from the same content as /ai-instructions. */
export function GET() {
  return new Response(aiInstructionsText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
