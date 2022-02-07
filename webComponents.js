//<커스텀태그>로 길고 복잡한 HTML 축약하는법
class Input extends HTMLElement{
    connectedCallback(){
        let label = document.createElement('label');
        this.appendChild(label);
        let name = this.getAttribute('name')
        this.innerHTML = `<label>${name}인풋이에요</label><input>`
    }
    //attribute 변경할때 마다 html 재렌더링
    static get observedAttributes(){
        return ['name']
    }
    attributeChangedCallback(){
        console.log(this.getAttribute('name'))
    }
}
customElements.define('custom-input', Input);