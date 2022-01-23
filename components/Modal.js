template.innerHTML = `
    <style>
        /* Modal.js */
        .modal {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.8);
        }

        .header {
            margin: 0;
            color: rgb(1, 122, 255);
            font-size: 24px;
            font-weight: 500;
        }

        .content {
            padding: 24px;
        }

        button {
            padding: 4px 28px;
            border: none;
            border-radius: 2px;
            background-color: rgba(1, 122, 255, 0.75);
            color: white;
            cursor: url(assets/images/cursor/ms_default.cur), auto;
        }

        button:hover {
            background-color: rgba(1, 122, 255, 1);
        }

        /* maps-modal */
        #maps-list {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 12px;
            padding: 0;
            margin: 0;
        }

        #maps-list li {
            line-height: 0;
        }

        #maps-list li button {
            line-height: 0;
            padding: 0;
            border: none;
            background-color: white;
            cursor: url(assets/images/cursor/ms_default.cur), auto;
        }

        #maps-list li button:hover {
            margin: -1px;
            border: 1px solid rgb(1, 122, 255);
            border-radius: 4px;
            background-color: rgb(1, 122, 255);
            cursor: url(assets/images/cursor/ms_default.cur), auto;
        }

        #maps-list li button:disabled {
            background-color: black;
            border: none;
            border-radius: 0;
            margin: 0;
        }

        /* inventory-modal */
        #inventory-container {
            color: white;
        }
    </style>

    <div class="modal">
        <div id="header-slot"></div>
        <div id="content-slot" class="content"></div>
        <button onClick="toggleModal()">Close</button>
    </div>
`

class Modal extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));

        // Replace slots with incoming HTML & add unique id
        shadow.querySelector("#header-slot").innerHTML = this.querySelector('[slot="header"]').outerHTML;
        shadow.querySelector("#header-slot").id = `${this.getAttribute('id')}-header`;

        shadow.querySelector("#content-slot").innerHTML = this.querySelector('[slot="content"]').outerHTML;
        shadow.querySelector("#content-slot").id = `${this.getAttribute('id')}-content`;
    }
}

window.customElements.define("ms-modal", Modal)

let modalIsOpen = false;

function toggleModal(modalName) {
    if(!modalIsOpen) {
        if(modalName === 'maps') {
            document.querySelector('#maps-modal').classList = 'disable-screen';
            document.querySelector('#maps-modal').style.display = 'flex';
        } else if (modalName === 'inventory') {
            document.querySelector('#inventory-modal').classList = 'disable-screen';
            document.querySelector('#inventory-modal').style.display = 'flex';
        }
    } else {
        document.querySelectorAll('ms-modal').forEach((element) => {
            element.style.display = 'none'
        })
    }
    modalIsOpen = !modalIsOpen;
}
