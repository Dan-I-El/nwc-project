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

    this.form = this.querySelector('#reset-form');

    this.#addSubmitionListener();
    
  };


  #addSubmitionListener() {

    this.form.addEventListener('submit', (event) => this.#handleSubmit(event));

  };

  #handleSubmit(event) {

    event.preventDefault();

    const formData = new FormData(this.form);

    const data = Object.fromEntries(formData);

    console.log('New password:', data);

    document.dispatchEvent(navigationEvent('login-page'));

    this.form.reset();

  }

};

export default ResetPage;
