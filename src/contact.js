const contact = (() => {
    const renderContact = () => {
        const main = document.querySelector('main');
        main.className = 'contact';
        main.textContent = '';
        const div = document.createElement('div');
        div.textContent = '01238888';
        div.className = 'hidden visuallyhidden';
        main.appendChild(div);
        div.classList.remove('hidden');
        setTimeout(() => {
            div.classList.remove('visuallyhidden');
        }, 10);
    };

    return { renderContact };
})();

export default contact;
