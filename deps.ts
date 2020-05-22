export * from "https://deno.land/std@v0.50.0/http/server.ts";

// funny thing, this typing seems to work. even though it uses "import { intervalToDuration } from 'date-fns'" without suffix
// this may be, because it is just used for typing and not by compiler...
// ... or the previous attempt was only complaining about the .js file
/// <reference path="https://deno.land/x/date_fns/intervalToDuration/index.d.ts" />
export { intervalToDuration } from "https://deno.land/x/date_fns/index.js";

export { Application, Context } from "https://deno.land/x/oak/mod.ts";
