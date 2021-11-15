// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from "./environment.interface";

export const environment: Environment = {
  production: false,
  api: "http://127.0.0.1:3333",
  mockApi: false,
  discordOauth2: {
    endpoint: "https://discord.com/api/oauth2/authorize",
    responseType: "token",
    scope: "identify",
    redirectUri: "http://localhost:4200/auth/callback",
    clientId: "630819443236405250",
  },
};
