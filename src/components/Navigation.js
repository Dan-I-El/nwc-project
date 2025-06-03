class NavigationPage extends HTMLElement {

    #pages = [ "main-page", "login-page", "signup-page", "reset-page", "profile-page" ];

    constructor() {

        super();

        this.setAttribute("opened", "main-page");
        
    }
    
    static get observedAttributes() {

        return ["opened"];

    };

    connectedCallback() {

        document.addEventListener("navigate", (event) => {

            this.setAttribute("opened", event.detail.direction);

        });

        if (this.getAttribute("opened") === "main-page") {

            this.#renderPage();

        }

    };

    attributeChangedCallback(name, oldValue, newValue) {

        if ((name === "opened") && (oldValue !== newValue)) {

            this.#renderPage();

        }

    };

    #renderPage() {

        const openedPage = this.getAttribute("opened");

        if (this.#pages.includes(openedPage)) {

            const newPage = document.createElement(openedPage);

            this.replaceChildren(newPage);

        }

    };

}

export default NavigationPage;
