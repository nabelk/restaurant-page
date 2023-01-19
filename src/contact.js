const contact = (() => {
    const renderContact = () => {
        const main = document.querySelector('main');
        main.className = 'contact';
        main.textContent = '';
        const div = document.createElement('div');
        for (let i = 0; i <= 1; i++) {
            const spanInfo = document.createElement('span');
            if (i === 0) {
                spanInfo.textContent = 'Contact: 1-400-88-553';
            } else {
                spanInfo.textContent =
                    'Opening Hours: Monday - Friday, 10am - 8pm';
            }
            div.appendChild(spanInfo);
        }
        const map = document.createElement('iframe');
        map.setAttribute(
            'src',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.775363714683!2d101.37603202138486!3d4.467891948053571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31ca57888b642017%3A0x6566aa0e8aa73b73!2s39000%20Cameron%20Highlands%2C%20Pahang!5e0!3m2!1sen!2smy!4v1674139066179!5m2!1sen!2smy'
        );
        div.appendChild(map);
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
