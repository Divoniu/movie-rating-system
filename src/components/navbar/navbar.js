class Navbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const html = await fetch("components/navbar/navbar.html").then(res=> res.text());
        const css = await fetch("components/navbar/navbar.css").then(res=> res.text());

        this.shadowRoot.innerHTML = `<style>${css}</style>${html} `

        this.addEventListeners();
    }

    addEventListeners = ()=>{
        const menuToggle = this.shadowRoot.querySelector(".menu-toggle");
        const navLinks = this.shadowRoot.querySelector(".nav-links");

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle("active");
            });
        } else {
            console.error("Could not load the navbar!");
        }
    }
}

customElements.define('mrs-navbar', Navbar);