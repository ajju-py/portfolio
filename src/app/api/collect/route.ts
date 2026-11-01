const ok = () => new Response(null, { status: 204 });

export async function POST() {
  return ok();
}
