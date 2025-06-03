import { navigationEvent } from '../utilities/events.js';

class SignUpPage extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Sign Up</h1>
        <form id="signup-form">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
          
          <button id="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
    `;

    this.#addNavigationListener();

    this.#addSubmitionListener();
    
  };
  
  #addNavigationListener() {
    
    this.querySelector('#signup-button').addEventListener('click', (event) => {
  
      event.preventDefault();
  
      document.dispatchEvent(navigationEvent(event.target.name));
  
    });

  };

  #addSubmitionListener() {

    this.querySelector('#signup-form').addEventListener('submit', () => {});

  };
    
}

export default SignUpPage;
