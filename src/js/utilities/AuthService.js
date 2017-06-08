class AuthService {

  static authenticateUser(token) {
    localStorage.setItem('x-auth-token', token);
  }

  static deauthenticateUser() {
    localStorage.removeItem('x-auth-token');
  }

  static getTokenURI() {
    return ('bearer ' + localStorage.getItem('x-auth-token')) || null;
  }

  static getToken() {
    return localStorage.getItem('x-auth-token') || null;
  }

}

export default AuthService;