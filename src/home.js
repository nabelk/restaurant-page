const home = (() => {
    const renderHome = () => {
        const main = document.querySelector('main');
        main.className = 'home';
        main.textContent = '';
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const button = document.createElement('button');
        h1.textContent =
            'Get a mouthful of unique tastes from\r\nour Malay Cuisine.';
        button.textContent = 'View Our Menu';
        button.addEventListener('click', () =>
            document.querySelector('button.menu').click()
        );
        div.append(h1, button);
        div.className = 'hidden visuallyhidden';
        main.appendChild(div);
        div.classList.remove('hidden');
        setTimeout(() => {
            div.classList.remove('visuallyhidden');
        }, 10);
    };

    return { renderHome };
})();

export default home;
