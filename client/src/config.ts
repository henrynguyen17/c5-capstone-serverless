// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '...'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-nk5kzn-n.us.auth0.com',            // Auth0 domain
  clientId: 'PULi38fhgU1V9Q95fPW8VikH5rMJWo2m',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
