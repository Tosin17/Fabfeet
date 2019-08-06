export class Constants {
  public static apiRoot = 'https://securingangularappscourse-api.azurewebsites.net/api/';

  // On login, we are redirected to this signin page (STS Signin page) --> (The issuer of our token)
  public static stsAuthority = "https://securingangularappscourse-sts.azurewebsites.net/";

  // public static apiRoot = 'http://localhost:2112/api/';
  // public static stsAuthority = 'http://localhost:4242/';

  public static clientId = 'spa-client';
  public static clientRoot = 'http://localhost:4200/';
}
