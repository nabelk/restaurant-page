import Asam from './asam-pedas.jpg';
import Kenduri from './nasi-kenduri.jpg';
import Char from './char-kuey-teow.JPG';
import Gulai from './gulai-tulang.JPG';

const menu = (() => {
    const renderMenu = () => {
        const main = document.querySelector('main');
        main.className = 'menu';
        main.textContent = '';
        const div = document.createElement('div');
        for (let i = 1; i <= 4; i++) {
            const menuList = document.createElement('div');
            const imgDiv = document.createElement('div');
            const description = document.createElement('div');
            const menuName = document.createElement('h2');
            const span = document.createElement('span');
            description.className = 'description';
            const food = new Image();
            menuList.className = `menu-${i}`;
            switch (menuList.className) {
                case 'menu-1':
                    food.src = Asam;
                    menuName.textContent = 'Ikan Merah Masak Tumis Pedas';
                    span.textContent = 'Originated from Terengganu';
                    break;
                case 'menu-2':
                    food.src = Gulai;
                    menuName.textContent = 'Gulai Tulang';
                    span.textContent = "Rendition of Terengganu's style";
                    break;
                case 'menu-3':
                    food.src = Kenduri;
                    menuName.textContent = 'Nasi Kenduri';
                    span.textContent = 'The usual Malaysia feast food';
                    break;
                case 'menu-4':
                    food.src = Char;
                    menuName.textContent = 'Char Kuey Teow';
                    span.textContent = 'One of the best from Penang';
                    break;
            }
            imgDiv.appendChild(food);
            description.append(menuName, span);
            menuList.append(imgDiv, description);
            div.appendChild(menuList);
        }
        div.className = 'hidden visuallyhidden';
        main.appendChild(div);
        div.classList.remove('hidden');
        setTimeout(() => {
            div.classList.remove('visuallyhidden');
        }, 10);
    };

    return { renderMenu };
})();

export default menu;
