import './styles.css';
import items from './templates/items.hbs'
import list from './menu.json'
const templateItems = items(list);

const menu = document.querySelector('.js-menu');
const body = document.querySelector('body')
menu.insertAdjacentHTML('afterbegin', templateItems);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const inputSwitch = document.querySelector('.js-switch-input');


const changeTheme = function() {
    let theme = '';
    body.classList.remove('dark-theme', 'light-theme');
    if (inputSwitch.checked) {
        theme = "dark-theme";

    } else {
        theme = 'light-theme';
    }
    updateLocalStorage(theme);
    updateTheme(theme);

};

const updateLocalStorage = function(theme) {
    localStorage.setItem('theme', theme);
}
const updateTheme = function(theme) {
    body.classList.add(theme);
}


const startTheme = function() {
    const localTheme = localStorage.getItem('theme');
    if (localStorage !== null) {
        updateLocalStorage(localTheme);
        updateTheme(localTheme);
    }
}
startTheme();
inputSwitch.addEventListener('change', changeTheme);