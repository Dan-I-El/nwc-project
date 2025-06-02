class ProfilePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div>
                <h1>User Profile</h1>
                <p>This is the user profile page.</p>
            </div>
        `;
  }
}

export default ProfilePage;
