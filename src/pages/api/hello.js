export async function GET() {
  return new Response(JSON.stringify({ message: "Hola desde Astro API!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
