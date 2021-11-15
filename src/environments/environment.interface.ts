export interface Environment {
  production: boolean;
  api: string;
  mockApi: boolean;
  discordOauth2: {
    endpoint: string;
    responseType: string;
    scope: string;
    redirectUri: string;
    clientId: string;
  };
}
