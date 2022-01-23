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

        .modal-btn {
            padding: 4px 28px;
            border: none;
            border-radius: 2px;
            background-color: rgba(1, 122, 255, 0.75);
            color: white;
            cursor: url(assets/images/cursor/ms_default.cur), auto;
        }

        .modal-btn:hover {
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

        /* #equip-container 3x3*/
        #equip-container {
            display: grid;
            width: 250px;
            height: 150px;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
            grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) ;
            grid-template-areas:
            ". . player player . ."
            ". weapon player player helmet ."
            ". . stat stat . ."
        }

        #weapon,
        #ui-weapon {
            grid-area: weapon;
            position: relative;
            left: 13%;
            top: 20%;
        }
        
        #equip-player-stand {
            grid-area: player;
            position: relative;
            top: 25%;
            left: 25%;
            draggable= "false"
        }

        #helmet,
        #ui-helmet {
            grid-area: helmet;
            position: relative;
            left: 13%;
            top: 20%;
        }

        #helmet,
        #weapon,
        #item-detail-icon {
            z-index: 99;
            display: none;
        }

        #ui-helmet,
        #ui-weapon,
        #ui-detail-icon {
            width: 28px;
            height: 28px;
            border: 2px solid grey;
            background-color: silver;
            z-index: 0;
        }

        #inventory-details {
            width: 250px;
            height: 50px;
            display: grid;
            grid-template-columns:  minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) ;
            grid-template-areas:
            "item description description buttons"
        }

        #item-detail-icon,
        #ui-detail-icon {
            grid-area: item;
            position: relative;
            left: 25%;
            top: 20%;
        }

        #item-description-container {
            grid-area: description;
            font-size: 12px;
            color: black;
        }

        #item-detail-equip {
            position: relative;
            top: 33%;
            left: 7%;
            grid-area: buttons;
            width: 55px;
            height: 20px;
            font-size: 12px;

            display: none;
            justify-content: center;
        }

        #item-detail-unequip {
            position: relative;
            top: 33%;
            left: 7%;
            grid-area: buttons;
            width: 55px;
            height: 20px;
            font-size: 12px;

            display: none;
            justify-content: center;
        }

        #items-container {
            width: 250px;
            height: 150px;
            overflow-y: scroll;
            scrollbar-width: none; /*firefox*/
            -ms-overflow-style: none; /*ie*/
        }

        #items-container::-webkit-scrollbar {
            display: none;
        }

    </style>

    <div class="modal">
        <div id="header-slot"></div>
        <div id="content-slot" class="content"></div>
        <button class="modal-btn" onClick="toggleModal()">Close</button>
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
