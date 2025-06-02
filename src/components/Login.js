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

        <a href="reset.html">Forgot Password?</a>
      </div>
    `;

    document.getElementById('login-form').addEventListener('submit', this.handleSubmit);
  }
}

export default LoginPage;
