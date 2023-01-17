import _ from 'lodash';
import pageLoad from './page';
import './style.css';

// function createBtn(name) {
//     const btn = document.createElement('button');
//     btn.textContent = name;
//     document.querySelector('#content').appendChild(btn);
// }

// createBtn('Home');
// createBtn('Menu');
// createBtn('Contact');

pageLoad.setHeader();
pageLoad.createBtn('Home');
pageLoad.createBtn('Menu');
pageLoad.createBtn('Contact');
pageLoad.buttonEvent();
