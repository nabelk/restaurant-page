// Page Load module

const pageLoad = (() => {
    const setHeader = () => {
        const header = document.createElement('header');
        const logoText = document.createElement('div');
        logoText.textContent = 'Rasa Kemelayuan';
        logoText.className = 'logo';
        header.appendChild(logoText);
        document.querySelector('#content').appendChild(header);
    };

    const createBtn = (name) => {
        const button = document.createElement('button');
        const header = document.querySelector('header');
        button.textContent = name;
        button.className = name;
        header.appendChild(button);
    };

    const buttonEvent = () => {
        const button = document.querySelectorAll('header button');
        button.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                console.log(e.target.className);
            });
        });
    };

    return {
        setHeader,
        createBtn,
        buttonEvent,
    };
})();

export default pageLoad;
