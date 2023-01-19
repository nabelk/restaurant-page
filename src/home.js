const home = (() => {
    const renderHome = () => {
        const main = document.querySelector('main');
        main.className = 'home';
        main.textContent = '';
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const button = document.createElement('button');
        button.className = 'to-menu';
        h1.textContent =
            'Get a mouthful of unique tastes from our Malay Cuisine.\r\nOur dishes are from old family recipes and what you taste is a home cook food.';
        button.textContent = 'View Our Menu';
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
