const template = document.createElement('template');
template.innerHTML = `
    <style>
    </style>
    <section>
    </section>
    `;

export class QuickMenuPage extends HTMLElement {
  /*
   * constructor
   */
  constructor() {
    super(); // 초기화
    this.items = [
      { index: 0, title: '비밀번호 결제수단 고객센터', data: {} },
      { index: 1, title: '자산관리' },
      { index: 2, title: '보험' },
      { index: 3, title: '대출' },
      { index: 4, title: '전자문서' },
      { index: 5, title: '송금' },
      { index: 6, title: '결제' },
      { index: 7, title: '카카오페이증권' },
      { index: 8, title: '제휴서비스' },
      { index: 9, title: '사장님' },
    ];
    this.attachShadow({ mode: 'open' }); // DOM scope 생성
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector('section')
      .insertAdjacentHTML('afterbegin', this.renderMenu());
  }
  /*
   * variables
   */

  static get observedAttributes() {
    return ['items'];
  }
  /*
   * Methods
   */

  attachEvents(): void {
    console.log('dd');
    //이벤트 리스터 등록
  }

  renderMenu(): string {
    const menu = '';
    for (let i = 0; i < this.items.length; i++) {
      menu += `
        <menu-container title='${this.items[i].title}'></menu-container>
      `;
    }
    return menu;
  }

  /*
   * life cycle
   */
  connectedCallback() {
    this.attachEvents();
  }
  disconnectedCallback() {
    console.log('3::: disconnectedCallback');
  }

  set title(newValue: string) {
    this.setAttribute('title', newValue);
  }
  get title() {
    return this.getAttribute('title');
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    //// called when one of attributes listed above is modified
  }
  adoptedCallback() {
    // called when the element is moved to a new document
    // 거의 쓸 일 x
  }
}
