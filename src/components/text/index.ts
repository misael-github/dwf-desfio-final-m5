export class Text extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["h1", "h3", "h4", "p"];
    tag: string = "p";
  
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      if (this.tags.includes(this.getAttribute("tag"))) {
        this.tag = this.getAttribute("tag") || this.tag;
      }
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const rootEl = document.createElement(this.tag);
      rootEl.textContent = this.textContent;
  
      const style = document.createElement("style");
  
      style.innerHTML = `
        h1 {
          font-size: 80px;
          font-weight: 700;
          color: var(--color-title);
          margin: 0;
          text-align: left;
          line-height: 90px;
          text-aling:center;
          max-width:350px
          
        }
        @media(min-width: 769px){
          h1{
            font-size: 50px;
            line-height: 100px;
            text-align:center
          }
        }
        h3 {
          font-size: 55px;
          margin: 0;
        }
        h4 {
          font-size: 45px;
          font-weight: 600;
          margin: 0;
        }
        p {
          font-size: 40px;
          text-align: center;
          font-weigth: 600;
          margin: 0;
          color:var(--color-title)
        }
        @media(min-width: 769px){
          p {
            font-size: 38px;
            width: 350px;
            margin: 0 auto;
            color:var(--color-title)
           
          }
        }
      `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(rootEl);
    }
  }
  customElements.define("my-text", Text);