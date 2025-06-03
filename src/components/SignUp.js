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

    this.form = this.querySelector('#signup-form');

    this.#addSubmitionListener();
    
  };
  

  #addSubmitionListener() {

    this.form.addEventListener('submit', (event) => this.#handleSubmit(event));

  };

  #handleSubmit(event) {

    event.preventDefault();

    const formData = new FormData(this.form);

    const data = Object.fromEntries(formData);

    console.log('Sign Up data:', data);

    document.dispatchEvent(navigationEvent('main-page'));

    this.form.reset();

  }
    
}

export default SignUpPage;
