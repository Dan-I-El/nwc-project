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
          
          <button id="login-button" type="submit">Login</button>
        </form>

        <button name="reset-page" id="reset-button">Forgot Password?</a>
      </div>
    `;

    this.form = this.querySelector('#login-form');

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

    this.form.addEventListener('submit', (event) => this.#handleSubmit(event));

  };

  #handleSubmit(event) {

    event.preventDefault();

    const formData = new FormData(this.form);

    const data = Object.fromEntries(formData);

    console.log('Login data:', data);

    document.dispatchEvent(navigationEvent('profile-page'));

    this.form.reset();

  }
  
}

export default LoginPage;
