import refs from './refs.js'
import serverData from '../data/serverData.js';
import questionsTemplate from '../templates/questions.hbs';
import { createLi } from '../js/templateStringHandler.js';

// export function submitHandler(e) {
//     e.preventDefault();
//     const inputValue = refs.input.value;
//     if (inputValue === '') return
//     serverData.push(inputValue);
//     refs.input.value = '';
//     const markup = questionsTemplate(serverData);
//     // refs.root.insertAdjacentHTML('beforeend', markup);
//     refs.root.innerHTML = markup;
    
// }

export function submitHandler(e) {
    e.preventDefault();
    const inputValue = refs.input.value;
    
    createLi(inputValue);
    if (inputValue === '') return;
    refs.ul.insertAdjacentHTML("beforeend", createLi(inputValue));
    const array = JSON.parse(localStorage.getItem("list"));
    const arrayForStorage = array ? array : [];
    arrayForStorage.push(inputValue);
    localStorage.setItem("list", JSON.stringify(arrayForStorage));
    refs.input.value = '';
    
}
