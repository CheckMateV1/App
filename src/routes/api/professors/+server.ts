import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import { getProfessorByQuery } from "$lib/server/database";

export const GET = (async ({ url }) => {
  const query = url.searchParams.get("query") ?? "";

  if (query === "") {
    throw error(400, "Query can't be empty");
  }

  return json({ data: await getProfessorByQuery(query) });
}) satisfies RequestHandler;
