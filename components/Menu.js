template.innerHTML = `
    <style>
        @keyframes slideMenuLeft {
            from { margin-right: -84px; }
            to { margin-right: 8px; }   
        }
        
        @keyframes slideMenuRight {
            from { margin-right: 8px; }
            to { margin-right: -84px; }   
        }
        
        .slideMenuLeft {
            animation-name: slideMenuLeft;
            animation-duration: 0.5s;
        }
        
        .slideMenuRight {
            animation-name: slideMenuRight;
            animation-duration: 0.5s;
        }
        
        #menu {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 4px;
        }
        
        #menu-container {
            display: flex;
            align-items: center;
        }
        
        #menu-container button {
            border: none;
            padding: 8px 16px;
            border: none;
            border-radius: 16px;
            background-color: rgb(0, 0, 0, 0.75);
            color: white;
        }
        
        #toggle-menu-button {
            height: 32px;
        }
        
        #menu ul {
            display: none;
            list-style: none;
            flex-direction: column;
            padding: 0;
            margin: 0 8px;
        }
        
        #menu-container li:not(:last-of-type) {
            margin-bottom: 8px;
        }
        
        #menu-container li button {
            width: 80px;
        }
    </style>

    <div id="menu">
        <div id="menu-container">
            <button id="toggle-menu-button" onClick="toggleMenu()"><</button>
            <ul id="menu-list">
                <li><button class="menu-item">Quest</button></li>
                <li><button class="menu-item">Store</button></li>
                <li><button class="menu-item">Skills</button></li>
                <li><button class="menu-item">Stats</button></li>
            </ul>
        </div>
    </div>
`

class Menu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));   
    }
}

window.customElements.define('ms-menu', Menu)

let menuIsOpen = false;

function toggleMenu() {
    const menuComponent = document.querySelector('ms-menu').shadowRoot;

    if(!menuIsOpen) {
        menuComponent.querySelector('#toggle-menu-button').textContent = '>'
        menuComponent.querySelector('#menu-list').style.display = 'flex'
        menuComponent.querySelector('#menu-list').classList.remove('slideMenuRight');
        menuComponent.querySelector('#menu-list').classList.add('slideMenuLeft');
        menuComponent.querySelector('#menu-list').style.marginRight = '8px';
    } else {
        menuComponent.querySelector('#toggle-menu-button').textContent = '<'
        menuComponent.querySelector('#menu-list').classList.remove('slideMenuLeft');
        menuComponent.querySelector('#menu-list').classList.add('slideMenuRight');
        menuComponent.querySelector('#menu-list').style.marginRight = '-84px';
    }

    menuIsOpen = !menuIsOpen;
}
