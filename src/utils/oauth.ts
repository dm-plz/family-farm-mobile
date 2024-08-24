import { authorize } from 'react-native-app-auth';

const GOOGLE_OAUTH_APP_GUID = '686661822188-cct2iq77fl06fk5t9dlsnatgtr90k4lc';
const config = {
  issuer: 'https://accounts.google.com',
  clientId: `${GOOGLE_OAUTH_APP_GUID}.apps.googleusercontent.com`,
  redirectUrl: `com.googleusercontent.apps.${GOOGLE_OAUTH_APP_GUID}:/oauth2redirect/google`,
  scopes: ['openid'],
};

export async function signInWithGoogle() {
  return await authorize(config);
}
