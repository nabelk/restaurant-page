// Page Load module

const pageLoad = (() => {
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const nav = document.createElement('nav');

    const createBtn = (name) => {
        const button = document.createElement('button');
        button.textContent = name;
        button.className = name.toLowerCase();
        nav.appendChild(button);
    };

    const renderGitHubIcon = () => {
        const iconSvg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        const iconPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );
        const iconTitle = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'title'
        );
        const a = document.createElement('a');

        a.setAttribute('href', 'https://github.com/nabelk');
        iconSvg.setAttribute('viewBox', '0 0 512 512');
        iconPath.setAttribute(
            'd',
            'M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'
        );
        iconTitle.textContent = 'Github Logo';

        iconSvg.append(iconTitle, iconPath);
        a.appendChild(iconSvg);

        return a;
    };

    const setPage = () => {
        const logoText = document.createElement('h2');
        logoText.textContent = 'Rasa Kemelayuan';
        logoText.className = 'logo';
        createBtn('Home');
        createBtn('Menu');
        createBtn('Contact');
        footer.textContent = 'Powered by ';
        footer.appendChild(renderGitHubIcon());
        header.append(logoText, nav);
        document.querySelector('#content').append(header, main, footer);
    };

    return {
        setPage,
        createBtn,
        renderGitHubIcon,
    };
})();

// Content Manipulation

const tabContent = (() => {
    const manipulationMain = (option) => {
        const main = document.querySelector('main');
        if (option === 'reset') {
            main.textContent = '';
        } else {
            option.className = 'hidden visuallyhidden';
            main.appendChild(option);
            option.classList.remove('hidden');
            setTimeout(() => {
                option.classList.remove('visuallyhidden');
            }, 10);
        }
    };

    const home = () => {
        manipulationMain('reset');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const button = document.createElement('button');
        button.className = 'to-menu';
        h1.textContent =
            'Get a mouthful of unique tastes from our Malay Cuisine.\r\nOur dishes are from old family recipes and what you taste is a home cook food.';
        button.textContent = 'View Our Menu';
        div.append(h1, button);
        manipulationMain(div);
    };

    const menu = () => {
        manipulationMain('reset');
        const div = document.createElement('div');
        div.textContent = 'Asam Pedas';
        manipulationMain(div);
    };

    const contact = () => {
        manipulationMain('reset');
        const div = document.createElement('div');
        div.textContent = '01238888';
        manipulationMain(div);
    };

    const buttonEvent = () => {
        const redirectMenuBtn = document.querySelector('.to-menu');
        const button = document.querySelectorAll('header button');
        redirectMenuBtn.addEventListener('click', () => menu());
        button.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                switch (e.target.className) {
                    case 'home':
                        home();
                        break;
                    case 'menu':
                        menu();
                        break;
                    case 'contact':
                        contact();
                        break;
                }
            });
        });
    };

    return { home, menu, contact, buttonEvent };
})();

export { pageLoad, tabContent };
