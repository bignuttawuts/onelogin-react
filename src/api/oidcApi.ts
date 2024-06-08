import queryString from "query-string";

// Static oidc params for a single provider
const authority = `https://${import.meta.env.VITE_ONELOGIN_SUBDOMAIN}.onelogin.com/oidc/2`;
const client_id = import.meta.env.VITE_ONELOGIN_CLIENT_ID;
const redirect_uri = import.meta.env.VITE_ONELOGIN_REDIRECT_URI;
const response_type = "id_token token";
const scope = "openid profile";
const logout_redirect_uri = import.meta.env.VITE_ONELOGIN_POST_LOGOUT_REDIRECT_URI;

export const beginAuth = (state: string, nonce: string) => {
  // Generate authentication URL
  const params = queryString.stringify({
    client_id,
    redirect_uri,
    response_type,
    scope,
    state,
    nonce
  });
  const authUrl = `${authority}/auth?${params}`;
  window.location.assign(authUrl);
};

export const logout = (idToken: string) => {
  window.location.assign(`${authority}/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${logout_redirect_uri}`)
}
