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

        <a href="login.html">Back to Login</a>
      </div>
    `;

    document.getElementById('reset-form').addEventListener('submit', () => {});
    
  }

}

export default ResetPage;
