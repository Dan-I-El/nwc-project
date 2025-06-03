import { navigationEvent } from '../utilities/events.js';

class MainPage extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Main Page</h1>
        <p>
          Welcome to the main page!
        </p>
        <div>
          <button name="profile-page">
            Open Profile
          </button>
          <button name="login-page">
            Login
          </button>
          <button name="signup-page">
            Sign Up
          </button>
        </div>
      </div>`;

    this.#addNavigationListener();
    
  };
  
  #addNavigationListener() {
    
    for (const button of this.querySelectorAll('button')) {

      button.addEventListener('click', (event) => {
  
        event.preventDefault();
    
        document.dispatchEvent(navigationEvent(event.target.name));

      });
  
    };

  };
    
}

export default MainPage;
