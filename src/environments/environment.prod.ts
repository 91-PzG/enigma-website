export const environment = {
  production: true,
  api: "https://api.91-pzg.de",
  discordOauth2: {
    endpoint: "https://discord.com/api/oauth2/authorize",
    responseType: "token",
    scope: "identify",
    redirectUri: "http://localhost:4200/auth/callback",
    clientId: "630819443236405250",
  },
};
