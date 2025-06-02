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
          
          <button type="submit">Sign Up</button>
        </form>
      </div>
    `;

    this.getElementById('signup-form').addEventListener('submit', this.handleSubmit);
    
  } 
}

export default SignUpPage;
