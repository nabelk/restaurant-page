import _ from 'lodash';
import './style.css';
import pageLoad from './page';
import home from './home';
import menu from './menu';
import contact from './contact';

pageLoad.setPage();
home.renderHome();

const buttonEvent = () => {
    const redirectMenuBtn = document.querySelector('.to-menu');
    const button = document.querySelectorAll('header button');
    redirectMenuBtn.addEventListener('click', () => menu.renderMenu());
    button.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            switch (e.target.className) {
                case 'home':
                    home.renderHome();
                    break;
                case 'menu':
                    menu.renderMenu();
                    break;
                case 'contact':
                    contact.renderContact();
                    break;
            }
        });
    });
};

buttonEvent();
