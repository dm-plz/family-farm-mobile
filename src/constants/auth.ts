import { isIOS } from '@/utils/platform';

export const GOOGLE_OAUTH_APP_GUID = isIOS()
  ? '297990896037-v5u61qtoirlh4kh1838qdf8sdmotfsku'
  : '297990896037-761s2d4s9h6fhf60qaa37icjba865i0m';

export const SIGN_IN_WITH_GOOGLE_CONFIG = {
  issuer: 'https://accounts.google.com',
  clientId: `${GOOGLE_OAUTH_APP_GUID}.apps.googleusercontent.com`,
  redirectUrl: `com.googleusercontent.apps.${GOOGLE_OAUTH_APP_GUID}:/oauth2redirect/google`,
  scopes: ['openid'],
};
