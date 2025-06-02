class MainPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div>
                <h1>Welcome to the Main Page</h1>
                <p>This is the main content area.</p>
            </div>
        `;
  }
}

export default MainPage;
