import { navigationEvent } from '../utilities/events.js';

class ResetPage extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Reset Password</h1>
        <form id="reset-form">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <button type="submit">Reset Password</button>
        </form>

        <button id="return-button" name="login-page">Back to Login</a>
      </div>
    `;

    this.#addNavigationListener();

    this.#addSubmitionListener();
    
  };
  
  #addNavigationListener() {
    
    this.querySelector('#return-button').addEventListener('click', (event) => {
  
      event.preventDefault();
  
      document.dispatchEvent(navigationEvent(event.target.name));
  
    });

  };

  #addSubmitionListener() {

    this.querySelector('#reset-form').addEventListener('submit', () => {});

  };

};

export default ResetPage;
