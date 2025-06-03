import { navigationEvent } from '../utilities/events.js';

class LoginPage extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Login</h1>
        <form id="login-form">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          
          <button type="submit">Login</button>
        </form>

        <button name="reset-page" id="reset-button">Forgot Password?</a>
      </div>
    `;

    this.#addNavigationListener();

    this.#addSubmitionListener();

  };

  #addNavigationListener() {
    
    this.querySelector('#reset-button').addEventListener('click', (event) => {
  
      event.preventDefault();
  
      document.dispatchEvent(navigationEvent(event.target.name));
  
    });

  };

  #addSubmitionListener() {

    this.querySelector('#login-form').addEventListener('submit', () => {});

  };
  
}

export default LoginPage;
