import { Environment } from "./environment.interface";

export const environment: Environment = {
  production: true,
  api: "https://api.91-pzg.de",
  mockApi: false,
  discordOauth2: {
    endpoint: "https://discord.com/api/oauth2/authorize",
    responseType: "token",
    scope: "identify",
    redirectUri: "https://enigma.91-pzg.de/auth/callback",
    clientId: "630819443236405250",
  },
};
