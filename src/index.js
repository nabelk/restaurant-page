import _ from 'lodash';
import './style.css';
import pageLoad from './page';
import home from './home';
import menu from './menu';
import contact from './contact';

pageLoad.setPage();
home.renderHome();
document.title = 'Rasa Kemelayuan';

const buttonEvent = () => {
    const button = document.querySelectorAll('header button');
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
