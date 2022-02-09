export class FooterLink extends HTMLElement {
  /*
  * constructor
  */
  constructor() { 
    super() // 초기화
  }
  /*
  * variables
  */

  //return attributes in setup method
  static get observedAttributes() { // browser calls this method when the element is removed from the document
    return [] 
  }
 /*
  * Methods
  */
  render(){
    this.shadow = this.attachShadow({ mode: "open" }) // DOM scope 생성
    this.shadow.innerHTML=`
    <nav>
        <a href="">고객센터</a>
        <a href="">신고하기</a>
        <a href="">홈페이지</a>
        <a href="">페이스북</a>
    </nav>
    `
  }
  /*
  * life cycle
  */
  connectedCallback() { // onload = created => event
    this.render()
    // this.shadowRoot.querySelector('#toggle-info').
    // addEventListener('click',()=>this.toggleInfo())
    console.log('2::: connectedCallback')

  }
  disconnectedCallback() { // unmounted => remove binding
     // this.shadowRoot.querySelector('#toggle-info').
    // removeEventListener('click',()=>this.toggleInfo())
    console.log('3::: disconnectedCallback')
  }
  attributeChangedCallback(name, oldValue, newValue) { //// called when one of attributes listed above is modified

    this.connectedCallback() //rerender
  }
  adoptedCallback() {
    // called when the element is moved to a new document
    // 거의 쓸 일 x
  }
 }